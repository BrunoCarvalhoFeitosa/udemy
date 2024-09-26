"use client"
import { useState } from "react"
import { Chapter } from "@prisma/client"
import axios from "axios"
import * as z from "zod"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { Checkbox } from "@/app/components/ui/checkbox"
import { SettingsIcon } from "lucide-react"

interface FormChapterAccessProps {
    initialData: Chapter
    courseId: string
    chapterId: string
}

const formSchema = z.object({
    isFree: z.boolean().default(false)
})

export const FormChapterAccess = ({ initialData, courseId, chapterId }: FormChapterAccessProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isFree: !!initialData?.isFree
        }
    })

    const { isSubmitting, isValid } = form.formState

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values)
            toast.success("Configurações de acesso do capítulo atualizada com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course chapter access: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Configurações de acesso do capítulo
                    </span>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        className="p-0"
                        onClick={toggleEdit}
                    >
                        {isEditing ? (
                            <>
                                Cancelar
                            </>
                        ) : (
                            <>
                                <SettingsIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {!isEditing ? (
                    <div className={cn(
                        "mt-2 text-sm",
                        !initialData.isFree && "text-gray-500 italic"
                    )}>
                        {initialData.isFree ? (
                            <p>
                                Este capítulo é gratuito para visualização.
                            </p>
                        ) : (
                            <p>
                                Este capítulo <strong>não</strong> é gratuito para visualização.
                            </p>
                        )}
                    </div>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="isFree"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="p-4 flex flex-row items-center space-y-0 space-x-3 border rounded-md">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="leading-none">
                                            <FormDescription>
                                                Marque este campo se quiser que este capítulo seja gratuito para visualização.
                                            </FormDescription>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center gap-x-2">
                                <Button
                                    disabled={!isValid ?? isSubmitting}
                                    type="submit"
                                    size="lg"
                                >
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </div>
    )
}