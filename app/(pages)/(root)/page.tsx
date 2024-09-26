import { Fragment } from "react"
import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { Footer } from "@/app/components/common/footer"
import { HomeHero } from "@/app/(pages)/(root)/components/home-hero"
import { HomeCourses } from "@/app/(pages)/(root)/components/home-courses"
import { HomeContent } from "@/app/(pages)/(root)/components/home-content"
import { HomeTestimonials } from "./components/home-testimonials"
import { HomeFaq } from "@/app/(pages)/(root)/components/home-faq"

const HomePage = () => {
    return (
        <Fragment>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HomeHero />
                <HomeCourses />
                <HomeContent />
                <HomeTestimonials />
                <HomeFaq />
            </main>
            <Footer />
        </Fragment>
    )
}

export default HomePage