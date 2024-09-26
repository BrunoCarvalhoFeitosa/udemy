"use client"
import { Fragment } from "react"
import Link from "next/link"
import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { Footer } from "@/app/components/common/footer"
import { Highlight } from "@/app/components/ui/hero-highlight"

const NotFoundPage = () => {
    return (
        <Fragment>
            <HeaderDesktop />
            <HeaderMobile />
            <main className="mx-auto px-5 lg:px-0 w-full lg:w-[640px] h-[50dvh] flex flex-col justify-center items-center">
                <h1 className="text-[26px] lg:text-4xl font-bold text-[#3C3B37]">
                    Página <Highlight>não encontrada.</Highlight>
                </h1>
                <p className="mt-2 text-center lg:text-left">
                    A página que você buscava não existe ou foi movida permanentemente.
                </p>
                <Link href="/" className="mt-4 px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-4 border-[#AF5250] h-14 md:h-16 text-base md:text-lg">
                    Retornar a página principal agora
                </Link>
            </main>
            <Footer />
        </Fragment>
    )
}

export default NotFoundPage