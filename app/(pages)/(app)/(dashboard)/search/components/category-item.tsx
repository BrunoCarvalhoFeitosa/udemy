"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import qs from "query-string"
import { IconType } from "react-icons"
import { Button } from "@/app/components/ui/button"

interface CategoryItemProps {
    label: string
    value?: string
    icon?: IconType
}

export const CategoryItem = ({ label, value, icon: Icon }: CategoryItemProps) => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategoryId = searchParams.get("categoryId")
    const currentTitle = searchParams.get("title")
    const isSelected = currentCategoryId === value

    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: currentTitle,
                categoryId: isSelected ? null : value
            }
        }, { skipNull: true, skipEmptyString: true })

        router.push(url)
    }
    
    return (
        <Button
            type="button"
            variant="ghost"
            onClick={onClick}
            className={cn(
                "py-2 px-3 flex items-center gap-x-1 text-sm border border-gray-200 rounded-full transition hover:border-[#EC5250] hover:bg-gray-100",
                isSelected && "border-[#EC5250] bg-gray-100"
            )}
        >
            {Icon && <Icon size={20} />}
            <span>
                {label}
            </span>
        </Button>
    )
}