"use client"
import { useState } from "react"
import { Course } from "@prisma/client"
import { useRouter } from "next/navigation"
import * as z from "zod"
import axios from "axios"
import toast from "react-hot-toast"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { FileUpload } from "@/app/(pages)/(app)/(dashboard)/components/file-upload"
import { ImageIcon, PlusIcon, SettingsIcon } from "lucide-react"

interface FormImageProps {
    initialData: Course
    courseId: string
}

const formSchema = z.object({
    imageUrl: z.string().min(1, {
        message: "A imagem é obrigatória."
    })
})

export const FormImage = ({ initialData, courseId }: FormImageProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("Imagem de capa do curso alterada com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course image: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Imagem do curso
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
                        {!isEditing && !initialData.imageUrl && (
                            <>
                                <PlusIcon />
                            </>
                        )}
                        {!isEditing && initialData.imageUrl && (
                            <>
                                <SettingsIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {!isEditing && (
                    !initialData.imageUrl ? (
                        <div className="flex justify-center items-center h-60 bg-gray-200">
                            <ImageIcon className="w-10 h-10 text-gray-500" />
                        </div>
                    ) : (
                        <div className="relative mt-2 aspect-video">
                            <Image
                                fill
                                src={initialData.imageUrl}
                                alt="Imagem do curso"
                                className="object-cover rounded-md"
                            />
                        </div>
                    )
                )}
                {isEditing && (
                    <div>
                        <FileUpload
                            endpoint="courseImage"
                            onChange={(url) => {
                                if (url) {
                                    onSubmit({ imageUrl: url })
                                }
                            }}
                        />
                        <div className="mt-4 text-xs text-muted-foreground">
                            16:9 proporção recomendada
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}