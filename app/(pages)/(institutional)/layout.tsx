"use client"
import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { Footer } from "@/app/components/common/footer"

const InstitucionalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            {children}
            <Footer />
        </div>
    )
}

export default InstitucionalLayout