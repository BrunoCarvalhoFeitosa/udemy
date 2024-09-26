"use client"
import { useState } from "react"
import { Attachment, Course } from "@prisma/client"
import { useRouter } from "next/navigation"
import * as z from "zod"
import axios from "axios"
import toast from "react-hot-toast"
import { Button } from "@/app/components/ui/button"
import { FileUpload } from "@/app/(pages)/(app)/(dashboard)/components/file-upload"
import { FileIcon, Loader2Icon, PlusIcon, Trash2Icon } from "lucide-react"

interface FormAttachmentProps {
    initialData: Course & { attachments: Attachment[] }
    courseId: string
}

const formSchema = z.object({
    url: z.string().min(1, {
        message: "A imagem é obrigatória."
    })
})

export const FormAttachment = ({ initialData, courseId }: FormAttachmentProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const router = useRouter()

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/attachments`, values)
            toast.success("Anexo do curso adicionado com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while add course attachment: ", error)
            toast.error("Algo deu errado.")
        }
    }

    const onDelete = async (id: string) => {
        try {
            setDeletingId(id)
            await axios.delete(`/api/courses/${courseId}/attachments/${id}`)
            toast.success("Sucesso ao remover anexo.")
            router.refresh()
        } catch (error) {
            console.error("Error while deleting attachment", error)
            toast.error("Erro ao remover anexo.")
        } finally {
            setDeletingId(null)
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Anexos do curso
                    </span>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        className="p-0"
                        onClick={toggleEdit}
                    >
                        {isEditing && (
                            <>
                                Cancelar
                            </>
                        )}
                        {!isEditing && (
                            <>
                                <PlusIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {!isEditing && (
                    <>
                        {initialData.attachments.length === 0 && (
                            <p className="mt-2 text-sm text-gray-500 italic">
                                Nenhum anexo criado.
                            </p>
                        )}

                        {initialData.attachments.length > 0 && (
                            <div className="space-y-2">
                                {initialData.attachments.map((attachment) => (
                                    <div
                                        key={attachment.id}
                                        className="p-3 flex items-center gap-2 w-full bg-gray-100 border border-gray-200 text-gray-700"
                                    >
                                        <FileIcon className="w-6 h-6 flex-shrink-0" />
                                        <p className="text-xs line-clamp-1">
                                            {attachment.name}
                                        </p>
                                        {deletingId === attachment.id && (
                                            <div className="ml-auto">
                                                <Loader2Icon className="w-5 h-5 animate-spin" />
                                            </div>
                                        )}
                                        {deletingId !== attachment.id && (
                                            <Button
                                                type="button"
                                                size="sm"
                                                variant="ghost"
                                                className="p-0 ml-auto"
                                                onClick={() => onDelete(attachment.id)}
                                            >
                                                <Trash2Icon className="w-5 h-5" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
                {isEditing && (
                    <div>
                        <FileUpload
                            endpoint="courseAttachment"
                            onChange={(url) => {
                                if (url) {
                                    onSubmit({ url: url })
                                }
                            }}
                        />
                        <div className="mt-4 text-xs text-muted-foreground">
                            Adicione qualquer arquivo necessário para que o aluno finalize o curso.
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}