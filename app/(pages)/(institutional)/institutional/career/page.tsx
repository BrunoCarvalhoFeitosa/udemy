import { HeaderTitle } from "@/app/(pages)/(institutional)/components/header-title"
import { Description } from "@/app/(pages)/(institutional)/institutional/career/components/description"
import { Jobs } from "@/app/(pages)/(institutional)/institutional/career/components/jobs"

const CareerPage = () => {
    return (
        <main>
            <HeaderTitle
                title="Carreiras"
                description="Fique por dentro das vagas de trabalho que a Udemy anuncia. Candidate-se, é fácil e rápido."
            />
            <Description />
            <Jobs />
        </main>
    )
}

export default CareerPage