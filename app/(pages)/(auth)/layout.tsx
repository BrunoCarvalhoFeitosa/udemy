"use client"
import { Fragment } from "react"
import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { Footer } from "@/app/components/common/footer"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <HeaderDesktop />
            <HeaderMobile />
            <main className="flex justify-center items-center w-full">
                <div className="px-0 md:px-8 flex items-center mx-auto w-full h-full">
                    <div className="mx-auto py-8 lg:py-16 lg:px-10 flex flex-col justify-center w-full xl:w-2/3 h-full">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default AuthLayout