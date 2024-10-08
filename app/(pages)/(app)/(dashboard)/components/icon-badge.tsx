import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

const backgroundVariants = cva(
    "flex justify-center items-center rounded-full",
    {
        variants: {
            variant: {
                default: "bg-[#EC5250]/30",
                success: "bg-emerald-100"
            },
            iconVariant: {
                default: "text-[#EC5250]",
                success: "text-emerald-700"
            },
            size: {
                default: "p-2",
                sm: "p-1"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

const iconVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "text-[#EC5250]",
                success: "text-emerald-700"
            },
            size: {
                default: "w-8 h-8",
                sm: "w-4 h-4",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>
type IconVariantProps = VariantProps<typeof iconVariants>

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantProps {
    icon: LucideIcon
}

export const IconBadge = ({
    icon: Icon,
    variant,
    size
}: IconBadgeProps) => {
    return (
        <div className={cn(backgroundVariants({ variant, size }))}>
            <Icon className={cn(iconVariants({ variant, size }))} />
        </div>
    )
}