"use client"
import { SidebarRoutes } from "@/app/(pages)/(app)/(dashboard)/components/sidebar-routes"
import { Logo } from "@/app/components/common/logo"

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-full md:border-r md:shadow-sm overflow-y-auto">
            <div className="py-[1.25rem] md:px-6">
                <Logo url="/dashboard" width="135" height="40" />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}