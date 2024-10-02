import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Content } from "@/app/(pages)/(institutional)/institutional/contact-us/components/content"

const ContactUsPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Fale conosco"
                description="Entre em contato conosco por meio do e-mail, telefone ou formulário."
            />
            <Content />
        </main>
    )
}

export default ContactUsPage