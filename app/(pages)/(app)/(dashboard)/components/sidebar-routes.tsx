"use client"
import { SidebarItem } from "@/app/(pages)/(app)/(dashboard)/components/sidebar-item"
import { BarChartIcon, LayoutIcon, ListIcon, SearchIcon } from "lucide-react"
import { usePathname } from "next/navigation"

const guestRoutes = [
    {
        icon: LayoutIcon,
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: SearchIcon,
        label: "Buscar",
        href: "/search"
    },
]

const instructorRoutes = [
    {
        icon: ListIcon,
        label: "Cursos",
        href: "/teacher/courses"
    },
    {
        icon: BarChartIcon,
        label: "Análise",
        href: "/teacher/analytics"
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname()
    const isInstructorPage = pathname.startsWith("/teacher")
    const routes = isInstructorPage ? instructorRoutes : guestRoutes

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}