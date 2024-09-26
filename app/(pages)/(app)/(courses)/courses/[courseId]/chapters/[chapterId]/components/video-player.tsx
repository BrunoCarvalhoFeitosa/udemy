"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useConfettiStore } from "@/hooks/use-confetti-store"
import axios from "axios"
import MuxPlayer from "@mux/mux-player-react"
import { cn } from "@/lib/utils"
import { toast } from "react-hot-toast"
import { Loader2Icon, LockIcon } from "lucide-react"

interface VideoPlayerProps {
    courseId: string
    chapterId: string
    playbackId: string
    nextChapterId?: string
    isLocked: boolean
    completeOnEnd: boolean
    title: string
}

export const VideoPlayer = ({ courseId, chapterId, playbackId, nextChapterId, isLocked, completeOnEnd, title }: VideoPlayerProps) => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const router = useRouter()
    const confetti = useConfettiStore()

    const onEnd = async () => {
        try {
            if (completeOnEnd) {
                await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
                    isCompleted: true
                })

                if (!nextChapterId) {
                    confetti.onOpen()
                }

                toast.success("Progresso atualizado.")
                router.refresh()

                if (nextChapterId) {
                    router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
                }
            }
        } catch (error) {
            console.error("Error while mark chapter as completed.", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="relative aspect-video">
            {!isReady && !isLocked && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-800">
                    <Loader2Icon className="w-8 h-8 animate-spin text-white" />
                </div>
            )}
            {isLocked && (
                <div className="absolute inset-0 flex flex-col gap-y-1 justify-center items-center bg-gray-800">
                    <LockIcon className="w-8 h-8 text-white" />
                    <p className="text-white">
                        Este capítulo é pago.
                    </p>
                </div>
            )}
            {!isLocked && (
                <MuxPlayer
                    autoPlay
                    playbackId={playbackId}
                    title={title}
                    className={cn(
                        !isReady && "hidden"
                    )}
                    onCanPlay={() => setIsReady(true)}
                    onEnded={onEnd}
                />
            )}
        </div>
    )
}