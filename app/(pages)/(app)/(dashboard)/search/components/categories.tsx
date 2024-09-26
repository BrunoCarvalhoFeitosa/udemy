"use client"
import { Category } from "@prisma/client"
import { IconType } from "react-icons"
import { CategoryItem } from "@/app/(pages)/(app)/(dashboard)/search/components/category-item"
import { FcAdvertising, FcEngineering, FcFilmReel, FcLibrary, FcMusic, FcOldTimeCamera } from "react-icons/fc"

interface CategoriesProps {
    items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
    "Tecnologia da Informação": FcEngineering,
    "Engenharia": FcFilmReel,
    "Contabilidade": FcAdvertising,
    "Marketing": FcAdvertising,
    "Idioma": FcLibrary,
    "Fotografia": FcOldTimeCamera,
    "Música": FcMusic,
}

export const Categories = ({ items }: CategoriesProps) => {
    return (
        <div className="pb-2 flex items-center gap-x-2 overflow-x-auto">
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}