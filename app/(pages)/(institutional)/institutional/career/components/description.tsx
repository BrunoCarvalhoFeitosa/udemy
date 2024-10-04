"use client"
import { peoples } from "@/content"
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip"

export const Description = () => {
    return (
        <section className="mx-auto px-5 md:px-16 w-full">
            <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#3C3B37]">
                    Junte-se a centenas de outros colaboradores que fazem a educação online acontecer.
                </h2>
                <p>
                    Na Udemy, não restringimos nenhuma candidatura, respeitamos a diversidade e a orientação 
                    sexual de cada candidato, acreditamos que diferentes ideias e perspectivas agregam
                    aos nossos projetos.
                </p>
                <div className="mt-3 flex flex-row w-full">
                    <AnimatedTooltip items={peoples} />
                </div>
            </div>
        </section>
    )
}