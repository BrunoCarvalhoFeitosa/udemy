"use client"
import { Progress } from "@/app/components/ui/progress"
import { cn } from "@/lib/utils"

interface CourseProgressProps {
    value: number
    variant?: "default" | "success"
    size?: "default" | "sm"
}

const colorByVariant = {
    default: "text-[#EE6361]",
    success: "text-emerald-700"
}

const sizeByVariant = {
    default: "text-sm",
    sm: "text-xs"
}

export const CourseProgress = ({ value, variant, size }: CourseProgressProps) => {
    return (
        <div>
            <Progress
                className="h-2"
                value={value}
                variant={variant}
            />
            <p className={cn(
                "mt-1 font-bold text-[#EE6361]",
                colorByVariant[variant || "default"],
                sizeByVariant[size || "default"]
            )}>
                {Math.round(value)}% completo
            </p>
        </div>
    )
}