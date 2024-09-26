"use client"
import { Button } from "@/app/components/ui/button"
import { ClerkLoaded, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SearchInput } from "@/app/components/ui/search-input"

export const NavbarRoutes = () => {
    const pathname = usePathname()
    const isInstructorPage = pathname.startsWith("/teacher")
    const isStudentPage = pathname.startsWith("/courses")
    const isSearchPage = pathname === "/search"

    return (
        <div className="flex justify-between items-center w-full">
            {isSearchPage && (
                <div className="hidden md:block">
                    <SearchInput />
                </div>
            )}
            <div className="ml-auto flex justify-end items-center gap-x-2 w-full">
                {isInstructorPage || isStudentPage ? (
                    <Link href="/dashboard">
                        <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="flex items-center gap-1 text-[14px]"
                        >
                            Sair
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="text-[14px]"
                        >
                            Modo instrutor
                        </Button>
                    </Link>
                )}
                <ClerkLoaded>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "w-10 h-10 lg:w-12 lg:h-12 outline-none border-none focus:border-none"
                            }
                        }}
                    />
                </ClerkLoaded>
            </div>
        </div>
    )
}