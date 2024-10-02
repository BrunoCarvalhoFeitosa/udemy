import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "@/app/(pages)/(institutional)/institutional/privacy-policy/components/content"

const PrivacyPolicyPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Política de privacidade"
                description="Saiba como coletamos, utilizamos e protegemos os seus dados."
            />
            <Content />
        </main>
    )
}

export default PrivacyPolicyPage