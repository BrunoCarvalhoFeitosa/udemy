import { HeaderDesktop } from "@/app/components/common/header-desktop"
import { HeaderMobile } from "@/app/components/common/header-mobile"
import { HeaderTitle } from "../components/header-title"
import { Content } from "./components/content"
import { Footer } from "@/app/components/common/footer"

const PrivacyPolicyPage = () => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main>
                <HeaderTitle
                    title="Política de privacidade"
                    description="Saiba como coletamos, utilizamos e protegemos os seus dados."
                />
                <Content />
            </main>
            <Footer />
        </div>
    )
}

export default PrivacyPolicyPage