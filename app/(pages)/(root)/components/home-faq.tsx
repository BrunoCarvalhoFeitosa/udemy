"use client"
import { AnimatePresence, motion } from "framer-motion"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"

export const HomeFaq = () => {
    const title = "Perguntas frequentes"
    const description = "Perguntas que os usuários já fizeram e são comuns entre a comunidade."

    return (
        <section className="w-full xl:px-10">
            <div className="py-16 pl-10 lg:pl-16 pr-4 lg:pb-32 w-full bg-white">
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
                <Accordion
                    type="multiple"
                    className="mt-8 w-full"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            O que é a nossa plataforma?
                        </AccordionTrigger>
                        <AccordionContent>
                            Nossa plataforma é um ambiente online onde você pode acessar cursos de diversas áreas, 
                            ministrados por instrutores experientes. Você pode aprender no seu próprio ritmo e de qualquer lugar.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Como me inscrevo em um curso?
                        </AccordionTrigger>
                        <AccordionContent>
                            Para se inscrever em um curso, basta criar uma conta, navegar pelos cursos disponíveis e 
                            clicar no botão &quot;Inscreva-se&quot; no curso desejado. Siga as instruções para finalizar a compra.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Existe algum custo para se inscrever nos cursos?
                        </AccordionTrigger>
                        <AccordionContent>
                            A maioria dos cursos tem um custo associado, mas também oferecemos cursos gratuitos. 
                            Fique atento a promoções e descontos especiais!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Como posso acessar os cursos após a inscrição?
                        </AccordionTrigger>
                        <AccordionContent>
                            Após a inscrição, você pode acessar seus cursos através do seu painel de usuário. 
                            Todos os cursos que você se inscreveu estarão disponíveis lá.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Posso assistir aos cursos em qualquer dispositivo?
                        </AccordionTrigger>
                        <AccordionContent>
                            Sim! Nossa plataforma é compatível com computadores, tablets e smartphones. 
                            Você pode aprender onde e quando quiser.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Os cursos têm prazo de conclusão?
                        </AccordionTrigger>
                        <AccordionContent>
                            Não! Você pode completar os cursos no seu próprio ritmo. Não há prazos para terminar as aulas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            E se eu tiver dúvidas sobre o conteúdo do curso?
                        </AccordionTrigger>
                        <AccordionContent>
                            Cada curso tem um espaço para perguntas, onde você pode interagir com o instrutor e outros 
                            alunos. Incentivamos a participação ativa!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            É possível obter um certificado após a conclusão do curso?
                        </AccordionTrigger>
                        <AccordionContent>
                            Sim! Após concluir todos os módulos e atividades do curso, você receberá um certificado 
                            digital que pode ser baixado e compartilhado.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            O que fazer se eu tiver problemas técnicos?
                        </AccordionTrigger>
                        <AccordionContent>
                            Se você enfrentar problemas técnicos, nossa equipe de suporte está pronta para ajudar. 
                            Entre em contato através da nossa página de suporte.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            Como posso se tornar um instrutor na plataforma?
                        </AccordionTrigger>
                        <AccordionContent>
                            Se você tem conhecimento em uma área específica e gostaria de compartilhar, entre em 
                            contato conosco para saber mais sobre o processo de inscrição para instrutores.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            A plataforma oferece suporte em outros idiomas?
                        </AccordionTrigger>
                        <AccordionContent>
                            Sim, nossa plataforma está disponível em vários idiomas. Você pode escolher o idioma 
                            de sua preferência nas configurações da sua conta.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            Como funciona a política de reembolso?
                        </AccordionTrigger>
                        <AccordionContent>
                            Oferecemos uma política de reembolso dentro de um determinado período após a compra. 
                            Verifique nossa política de reembolso para mais detalhes.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}