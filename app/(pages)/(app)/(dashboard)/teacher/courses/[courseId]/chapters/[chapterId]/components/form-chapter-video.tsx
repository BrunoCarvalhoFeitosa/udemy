"use client"
import { useState } from "react"
import { Chapter, MuxData } from "@prisma/client"
import { useRouter } from "next/navigation"
import MuxPlayer from "@mux/mux-player-react"
import * as z from "zod"
import axios from "axios"
import toast from "react-hot-toast"
import { Button } from "@/app/components/ui/button"
import { FileUpload } from "@/app/(pages)/(app)/(dashboard)/components/file-upload"
import { PlusIcon, SettingsIcon, VideoIcon } from "lucide-react"

interface FormChapterVideoProps {
    initialData: Chapter & { muxData: MuxData | null }
    courseId: string
    chapterId: string
}

const formSchema = z.object({
    videoUrl: z.string().min(1, {
        message: "O vídeo é obrigatório."
    })
})

export const FormChapterVideo = ({ initialData, courseId, chapterId }: FormChapterVideoProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values)
            toast.success("Vídeo do curso atualizado com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course video: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Vídeo do curso
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
                        {!isEditing && !initialData.videoUrl && (
                            <>
                                <PlusIcon />
                            </>
                        )}
                        {!isEditing && initialData.videoUrl && (
                            <>
                                <SettingsIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {!isEditing && (
                    !initialData.videoUrl ? (
                        <div className="flex justify-center items-center h-60 bg-gray-200">
                            <VideoIcon className="w-10 h-10 text-gray-500" />
                        </div>
                    ) : (
                        <div className="relative mt-2 aspect-video">
                            <MuxPlayer
                                playbackId={initialData.muxData?.playbackId ?? ""}
                            />
                        </div>
                    )
                )}
                {isEditing && (
                    <div>
                        <FileUpload
                            endpoint="chapterVideo"
                            onChange={(url) => {
                                if (url) {
                                    onSubmit({ videoUrl: url })
                                }
                            }}
                        />
                        <div className="mt-4 text-xs text-muted-foreground">
                            Adicione o vídeo deste capítulo.
                        </div>
                    </div>
                )}
            </div>
            {initialData.videoUrl && !isEditing && (
                <div className="mt-2 text-xs text-gray-500">
                    O upload de vídeo pode levar alguns minutos para ser processado.
                </div>
            )}
        </div>
    )
}