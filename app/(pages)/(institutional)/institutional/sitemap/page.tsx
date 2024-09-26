import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { HeaderTitle } from "../components/header-title"
import { Content } from "./components/content"
import { Footer } from "@/app/components/common/footer"

const SitemapPage = () => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HeaderTitle
                    title="Mapa do site"
                    description="Todos os links pertencentes ao nosso site."
                />
                <Content />
            </main>
            <Footer />
        </div>
    )
}

export default SitemapPage