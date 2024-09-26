import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { HeaderTitle } from "../components/header-title"
import { Content } from "./components/content"
import { Footer } from "@/app/components/common/footer"

const UseTermsPolicyPage = () => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HeaderTitle
                    title="Termos de uso"
                    description="Termos e condições gerais de uso do aplicativo/site."
                />
                <Content />
            </main>
            <Footer />
        </div>
    )
}

export default UseTermsPolicyPage