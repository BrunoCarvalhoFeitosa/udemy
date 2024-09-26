"use client"
import { galleries } from "@/content"
import { AnimatePresence, motion } from "framer-motion"
import { Carousel, Card } from "@/app/components/ui/cards-carousel"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"

export const HomeHero = () => {
    const title = "Aprender e evoluir é sempre muito bom"
    const description = "Crie sua conta agora e explore uma vasta variedade de cursos que envolvem diversas áreas do conhecimento. Você encontrará cursos voltados ao desenvolvimento de aplicativos, desenvolvimento de sites, negócios, finanças, contabilidade, tecnologia da informação, marketing, fotografia e vídeo, inglês, espanhol, francês, matemática, saúde, música e muito mais."
    const cards = galleries.map((gallery, index) => (
        <Card key={gallery.src} card={gallery} index={index} layout={true} />
    ))

    return (
        <section className="w-full xl:px-10">
            <div className="py-16 lg:pb-20 pl-10 lg:pl-16 w-full bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex flex-col flex-1 justify-center z-10 bg-gradient-to-b">
                    <AnimatePresence>
                        <div className="flex flex-col 2xl:gap-3">
                            <motion.div
                                initial={{ opacity: 0, transform: "translateX(-40px)" }}
                                animate={{ opacity: 1, transform: "translateX(0)" }}
                                exit={{ opacity: 0, transform: "translateX(0)" }}
                            >
                                <TextGenerateEffect
                                    duration={2}
                                    filter={false}
                                    words={title}
                                    className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl leading-tight font-bold text-[#3C3B37]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, transform: "translateX(-40px)" }}
                                animate={{ opacity: 1, transform: "translateX(0)" }}
                                exit={{ opacity: 0, transform: "translateX(0)" }}
                            >
                                <TextGenerateEffect
                                    duration={1}
                                    filter={false}
                                    words={description}
                                    className="mt-1 lg:mt-0 xl:w-[85%] text-base 2xl:text-lg"
                                />
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
                <div className="mt-4 w-full h-full">
                    <Carousel items={cards} />
                </div>
            </div>
        </section>
    )
}
