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
import { Editor } from "@/app/components/ui/editor"
import { Preview } from "@/app/components/ui/preview"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { SettingsIcon } from "lucide-react"

interface FormChapterDescriptionProps {
    initialData: Chapter
    courseId: string
    chapterId: string
}

const formSchema = z.object({
    description: z.string().min(1, {
        message: "A descrição do capítulo é obrigatória."
    })
})

export const FormChapterDescription = ({ initialData, courseId, chapterId }: FormChapterDescriptionProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: initialData?.description ?? ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values)
            toast.success("Descrição do capítulo atualizada com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course chapter description: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Descrição do capítulo
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
                        !initialData.description && "text-gray-500 italic"
                    )}>
                        {!initialData.description && "Nenhuma descrição."}
                        {initialData.description && (
                            <Preview
                                value={initialData.description}
                            />
                        )}
                    </div>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="description"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Editor
                                                {...field}
                                            />
                                        </FormControl>
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