import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "@/app/(pages)/(institutional)/institutional/use-terms/components/content"

const UseTermsPolicyPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Termos de uso"
                description="Termos e condições gerais de uso do aplicativo/site."
            />
            <Content />
        </main>
    )
}

export default UseTermsPolicyPage