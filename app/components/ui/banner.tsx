"use client"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { AlertTriangleIcon, CheckCircleIcon } from "lucide-react"

interface BannerProps extends VariantProps<typeof bannerVariants> {
    label: string
}

const bannerVariants = cva(
    "p-4 flex items-center w-full h-14 border text-sm text-center",
    {
        variants: {
            variant: {
                warning: "bg-yellow-200/80 border-yellow-300 text-primary",
                success: "bg-emerald-700 border-emerald-800 text-secondary"
            }
        },
        defaultVariants: {
            variant: "warning"
        }
    }
)

const iconMap = {
    warning: AlertTriangleIcon,
    success: CheckCircleIcon
}

export const Banner = ({ variant, label }: BannerProps) => {
    const Icon = iconMap[variant || "warning"]

    return (
        <div className={cn(bannerVariants({ variant }))}>
            <Icon className="mr-2 w-5 h-5" />
            {label}
        </div>
    )
}