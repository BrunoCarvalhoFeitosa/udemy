"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { Sidebar } from "@/app/(pages)/(app)/(dashboard)/components/sidebar"

export const SidebarMobile = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}