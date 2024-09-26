"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useConfettiStore } from "@/hooks/use-confetti-store"
import axios from "axios"
import toast from "react-hot-toast"
import { Button } from "@/app/components/ui/button"
import { CheckCheckIcon, XCircleIcon } from "lucide-react"

interface CourseProgressButtonProps {
    chapterId: string
    courseId: string
    isCompleted?: boolean
    nextChapterId?: string

}

export const CourseProgressButton = ({ courseId, chapterId, isCompleted, nextChapterId }: CourseProgressButtonProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const confetti = useConfettiStore()
    const Icon = isCompleted ? XCircleIcon : CheckCheckIcon

    const onClick = async () => {
        try {
            setIsLoading(true)

            await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
                isCompleted: !isCompleted
            })

            if (!isCompleted && !nextChapterId) {
                confetti.onOpen()
            }

            if (!isCompleted && nextChapterId) {
                router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
            }

            toast.success("Progresso atualizado.")
            router.refresh()
        } catch (error) {
            console.error("Error while mark chapter as completed.", error)
            toast.error("Algo deu errado")
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <Button
            disabled={isLoading}
            type="button"
            size="lg"
            variant={isCompleted ? "outline" : "success"}
            className="flex items-center gap-x-2"
            onClick={onClick}
        >
            {isCompleted ? "Não completado" : "Marcar como completo"}
            <Icon className="w-4 h-4" />
        </Button>
    )
}