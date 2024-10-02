import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "./components/content"

const AboutUsPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Quem somos"
                description="Conheça nossa história e nossas metas."
            />
            <Content />
        </main>
    )
}

export default AboutUsPage