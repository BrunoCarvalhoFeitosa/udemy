import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "@/app/(pages)/(institutional)/institutional/sitemap/components/content"

const SitemapPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Mapa do site"
                description="Todos os links pertencentes ao nosso site."
            />
            <Content />
        </main>
    )
}

export default SitemapPage