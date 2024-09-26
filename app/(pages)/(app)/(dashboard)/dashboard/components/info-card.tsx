import { IconBadge } from "@/app/(pages)/(app)/(dashboard)/components/icon-badge"
import { LucideIcon } from "lucide-react"

interface InfoCardProps {
    numberOfItems: number
    variant?: "default" | "success"
    label: string
    icon: LucideIcon
}

export const InfoCard = ({ numberOfItems, variant, label, icon: Icon }: InfoCardProps) => {
    return (
        <div className="p-3 flex items-center gap-x-2 border">
            <IconBadge
                variant={variant}
                icon={Icon}
            />
            <div>
                <p className="font-bold">
                    {label}
                </p>
                <p className="text-sm text-gray-500">
                    {numberOfItems} {numberOfItems === 1 ? "curso" : "cursos"}
                </p>
            </div>
        </div>
    )
}