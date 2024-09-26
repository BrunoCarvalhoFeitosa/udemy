"use client"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { LockIcon, PlayCircleIcon, CheckCircleIcon } from "lucide-react"

interface CourseSidebarItemProps {
    id: string
    courseId: string
    label: string
    isCompleted: boolean
    isLocked: boolean
}

export const CourseSidebarItem = ({ id, courseId, label, isCompleted, isLocked }: CourseSidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()
    const Icon = isLocked ? LockIcon : (isCompleted ? CheckCircleIcon : PlayCircleIcon)
    const isActive = pathname.includes(id)

    const onClick = () => {
        router.push(`/courses/${courseId}/chapters/${id}`)
    }
    
    return (
        <Button
            type="button"
            variant="ghost"
            className={cn(
                "relative w-full h-12 lg:h-14 p-0 pl-6 flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-600 hover:bg-gray-300/20 transition-all",
                isActive && "bg-gray-100 text-gray-700 hover:text-gray-800 hover:bg-gray-200",
                isCompleted && "text-emerald-700 hover:text-emerald-700",
                isCompleted && isActive && "bg-emerald-200/20"
            )}
            onClick={onClick}
        >
            <div className="py-4 flex items-center gap-x-2 w-full">
                <div className="flex justify-center items-center w-8 h-8">
                    <Icon
                        size={22}
                        className={cn(
                            "text-gray-500",
                            isActive && "text-gray-700",
                            isCompleted && "text-emerald-700"
                        )}
                    />
                </div>
                <div className="pr-5 flex-1 text-left truncate">
                    {label}
                </div>
            </div>
            <div className={cn(
                "absolute top-0 right-0 h-full opacity-0 border-2 border-gray-700 transition-all",
                isActive && "opacity-100",
                isCompleted && "border-emerald-700"
            )} />
        </Button>
    )
}