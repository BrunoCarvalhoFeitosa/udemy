"use client"
import { useState } from "react"
import axios from "axios"
import * as z from "zod"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { SettingsIcon } from "lucide-react"

interface FormChapterTitleProps {
    initialData: {
        title: string
    }
    courseId: string
    chapterId: string
}

const formSchema = z.object({
    title: z.string().min(1, {
        message: "O título do capítulo é obrigatório."
    })
})

export const FormChapterTitle = ({ initialData, courseId, chapterId }: FormChapterTitleProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    })

    const { isSubmitting, isValid } = form.formState

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values)
            toast.success("Título do capítulo atualizado com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course chapter title: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Título do capítulo
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
                    <p className="mt-2">
                        {initialData.title}
                    </p>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="title"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder={`e.g. ${initialData.title}`}
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