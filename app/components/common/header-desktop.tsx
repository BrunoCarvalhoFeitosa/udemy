"use client"
import { categories } from "@/content"
import { ClerkLoaded, UserButton, useSession } from "@clerk/nextjs"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu"
import { Logo } from "@/app/components/common/logo"

export const HeaderDesktop = () => {
    const { session } = useSession()

    return (
        <header className="hidden lg:block sticky top-0 w-full bg-white z-50">
            <div className="py-6 px-4 lg:px-10 flex justify-between items-center gap-32 w-full">
                <div className="flex items-center gap-2 flex-1">
                    <Logo url="/" width="180" height="60" />
                    <div>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Categorias
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-2 xl:gap-3 p-4 md:w-[570px] xl:grid-cols-2 xl:w-[1000px] ">
                                            {categories.map((category) => (
                                                <Link
                                                    key={category.title}
                                                    title={category.title}
                                                    href={category.href}
                                                    className="py-2 px-4 hover:bg-gray-100"
                                                >
                                                    <p className="text-lg font-bold text-[#3C3B37]">
                                                        {category.title}
                                                    </p>
                                                    <p className="text-[#3C3B37]">
                                                        {category.description}
                                                    </p>
                                                </Link>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Torne-se instrutor na Udemy
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Udemy Business
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                {session?.id ? (
                                    <NavigationMenuItem>
                                        <Link href="/dashboard" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Começar aprendizado
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ) : (
                                    <div className="flex items-center">
                                        <NavigationMenuItem>
                                            <Link href="/sign-in" legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    Login
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link href="/sign-up" legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    Cadastro
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </div>
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {session && session.user.id && (
                    <ClerkLoaded>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 lg:w-12 lg:h-12 outline-none border-none focus:border-none"
                                }
                            }}
                        />
                    </ClerkLoaded>
                )}
            </div>
        </header>
    )
}