import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { HeaderTitle } from "../components/header-title"
import { Content } from "./components/content"
import { Footer } from "@/app/components/common/footer"

const CookiesPolicyPage = () => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HeaderTitle
                    title="Política de cookies"
                    description="O que são cookies, tipos de cookies e porque utilizamos."
                />
                <Content />
            </main>
            <Footer />
        </div>
    )
}

export default CookiesPolicyPage