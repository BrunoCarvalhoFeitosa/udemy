"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useConfettiStore } from "@/hooks/use-confetti-store"
import axios from "axios"
import toast from "react-hot-toast"
import { Button } from "@/app/components/ui/button"
import { ConfirmModal } from "@/app/components/modals/confirm-modal"
import { TrashIcon } from "lucide-react"

interface ActionsProps {
    disabled: boolean
    courseId: string
    isPublished: boolean
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const confetti = useConfettiStore()

    const onClick = async () => {
        try {
            setIsLoading(true)

            if (isPublished) {
                await axios.patch(`/api/courses/${courseId}/unpublish`)
                toast.success("Curso despublicado.")
            } else {
                await axios.patch(`/api/courses/${courseId}/publish`)
                toast.success("Curso publicado.")
                confetti.onOpen()
            }

            router.refresh()
        } catch (error) {
            toast.error("Algo deu errado.")
        } finally {
            setIsLoading(false)
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true)

            await axios.delete(`/api/courses/${courseId}`)
            toast.success("Curso excluído.")
            router.refresh()
            router.push(`/teacher/courses`)
        } catch (error) {
            toast.error("Algo deu errado.")
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <div className="flex items-center gap-x-2">
            <Button
                disabled={disabled || isLoading}
                size="default"
                variant="outline"
                onClick={onClick}
            >
                {isPublished ? "Despublicar" : "Publicar"}
            </Button>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="default" className="rounded-md">
                    <TrashIcon className="w-5 h-5" />
                </Button>
            </ConfirmModal>
        </div>
    )
}