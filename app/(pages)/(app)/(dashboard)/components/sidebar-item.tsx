"use client"
import { usePathname, useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const isActive =
        (pathname === "/dashboard" && href === "/dashboard") ||
        pathname === href ||
        pathname.startsWith(`${href}/`)

    const onClick = () => {
        router.push(href)
    }

    return (
        <Button
            type="button"
            variant="ghost"
            onClick={onClick}
            className={cn(
                " py-0 pl-6 pr-0 h-14 flex justify-start items-center gap-x-2 hover:bg-gray-300/20 hover:text-gray-600",
                isActive && "bg-[#EC5250]/20 text-[#EC5250] hover:bg-[#EC5250]/20 hover:text-[#EC5250]"
            )}
        >
            <div className="py-4 flex items-center gap-x-2">
                <Icon
                    size={22}
                />
                {label}
            </div>
            <div className={cn(
                "ml-auto h-full opacity-0 border-2 border-[#EC5250] transition-all",
                isActive && "opacity-100"
            )}>

            </div>
        </Button>
    )
}