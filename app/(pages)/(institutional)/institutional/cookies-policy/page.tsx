import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "@/app/(pages)/(institutional)/institutional/cookies-policy/components/content"

const CookiesPolicyPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Política de cookies"
                description="O que são cookies, tipos de cookies e porque utilizamos."
            />
            <Content />
        </main>
    )
}

export default CookiesPolicyPage