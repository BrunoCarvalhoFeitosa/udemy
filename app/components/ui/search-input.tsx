"use client"
import { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { Input } from "@/app/components/ui/input"
import { SearchIcon } from "lucide-react"

export const SearchInput = () => {
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value)
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const currentCategoryId = searchParams.get("categoryId")

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                categoryId: currentCategoryId,
                title: debouncedValue
            }
        }, { skipEmptyString: true, skipNull: true })

        router.push(url)
    }, [debouncedValue, currentCategoryId, router, pathname])

    return (
        <div className="relative">
            <SearchIcon className="absolute top-2/4 -translate-y-2/4 left-3 w-5 h-5 text-gray-500" />
            <Input
                value={value}
                placeholder="Buscar por um curso..."
                onChange={(event) => setValue(event.target.value)}
                className="pl-10 w-full md:w-[300px] xl:w-[380px] rounded-full bg-gray-100"
            />
        </div>
    )
}