"use client"
import { AnimatePresence, motion } from "framer-motion"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"
import { InfiniteMovingCards } from "@/app/components/ui/infinit-moving-cards"
import { testimonials } from "@/content"

export const HomeTestimonials = () => {
    const title = "Milhares de acessos diários em nossa plataforma"
    const description = "São milhares de acessos diários em nossa plataforma, a cada dia uma pessoa nova entrando no mercado de trabalho. Veja depoimentos:"

    return (
        <section className="w-full xl:px-10">
            <div className="py-16 pl-10 lg:pl-16 lg:pt-32 w-full bg-white overflow-hidden">
                <div className="w-full">
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
                                    className="text-3xl md:text-4xl lg:text-3xl 2xl:text-5xl leading-tight font-bold text-[#3C3B37]"
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
                    <div className="mt-6">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="left"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}