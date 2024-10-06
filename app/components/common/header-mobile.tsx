"use client"
import { useState } from "react"
import { categories } from "@/content"
import { ClerkLoaded, UserButton, useSession } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet"
import { Button } from "@/app/components/ui/button"
import { Logo } from "@/app/components/common/logo"
import { ChevronDownIcon, MenuIcon } from "lucide-react"
import Link from "next/link"

export const HeaderMobile = () => {
    const [open, setOpen] = useState<boolean>(true)
    const { session } = useSession()

    const handleDropdown = () => {
        setOpen(!open)
    }

    return (
        <header className="block lg:hidden sticky top-0 w-full bg-white z-50">
            <div className="py-6 px-4 lg:px-10 flex justify-between items-center gap-32 w-full">
                <Sheet>
                    <Logo url="/" width="140" height="45" />
                    <SheetTrigger asChild>
                        <Button
                            type="button"
                            variant="ghost"
                        >
                            <MenuIcon className="w-7 h-7 text-[#3C3B37]" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col">
                        <SheetHeader>
                            <SheetTitle>
                                Menú
                            </SheetTitle>
                        </SheetHeader>
                        <div className="py-10 flex-1 overflow-y-auto">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <div className="text-lg font-semibold text-[#3C3B37]">
                                        Torne-se instrutor na Udemy
                                    </div>
                                </li>
                                <li>
                                    <div className="text-lg font-semibold text-[#3C3B37]">
                                        <Link href="/institutional/download-app">
                                            Obtenha o aplicativo
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            className="p-0 flex items-center gap-2"
                                            onClick={handleDropdown}
                                        >
                                            <div className="text-lg font-semibold text-[#3C3B37]">
                                                Categorias
                                            </div>
                                            <div className={`${open && "rotate-180"} transition-transform duration-300`}>
                                                <ChevronDownIcon className="w-3 h-3" />
                                            </div>
                                        </Button>
                                    </div>
                                    <div
                                        className={cn(
                                            "pl-7 flex flex-col gap-2 invisible opacity-0 transition-opacity duration-500 h-0",
                                            open && "visible opacity-100 h-auto"
                                        )}
                                    >
                                        {categories.map((category, index) => (
                                            <div
                                                key={index}
                                                className="text-sm text-[#3C3B37]"
                                            >
                                                {category.title}
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                {session?.id ? (
                                    <li>
                                        <div className="text-lg font-semibold text-[#3C3B37]">
                                            Dashboard
                                        </div>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <div className="text-lg font-semibold text-[#3C3B37]">
                                                <Link href="/sign-in">
                                                    Entre
                                                </Link>
                                            </div>     
                                        </li>
                                        <li>
                                            <div className="text-lg font-semibold text-[#3C3B37]">
                                                <Link href="/sign-up">
                                                    Cadastre-se
                                                </Link>
                                            </div>     
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <SheetFooter>
                            {session && session?.user.id && (
                                <div className="flex justify-end">
                                    <ClerkLoaded>
                                        <UserButton
                                            appearance={{
                                                elements: {
                                                    avatarBox: "w-12 h-12 outline-none border-none focus:border-none"
                                                }
                                            }}
                                        />
                                    </ClerkLoaded>
                                </div>
                            )}
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}