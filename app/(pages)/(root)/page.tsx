import { Fragment } from "react"
import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { HomeHero } from "@/app/(pages)/(root)/components/home-hero"
import { HomeCourses } from "@/app/(pages)/(root)/components/home-courses"
import { HomeTestimonials } from "./components/home-testimonials"
import { HomeFaq } from "@/app/(pages)/(root)/components/home-faq"
import { Footer } from "@/app/components/common/footer"

const HomePage = () => {
    return (
        <Fragment>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HomeHero />
                <HomeCourses />
                <HomeTestimonials />
                <HomeFaq />
            </main>
            <Footer />
        </Fragment>
    )
}

export default HomePage