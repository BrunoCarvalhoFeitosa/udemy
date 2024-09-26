"use client"
import { SidebarMobile } from "@/app/(pages)/(app)/(dashboard)/components/sidebar-mobile"
import { NavbarRoutes } from "@/app/components/common/navbar-routes"

export const Navbar = () => {
    return (
        <div className="p-4 flex items-center w-full h-full bg-white border-b md:shadow-sm">
            <SidebarMobile />
            <NavbarRoutes />
        </div>
    )
}