"use client"
import { courses, coursesCloudComputing, coursesDatabase, coursesDesign, coursesMobileDevelopment, coursesQualityAssurance, coursesWebDevelopment } from "@/content"
import { AnimatePresence, motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel"

export const HomeCourses = () => {
    const title = "Ampla seleção de cursos exclusivos e baratos"
    const description = "Escolha entre mais de 250.000 cursos em vídeo online com novas adições publicadas mensalmente. São cursos muito bem estruturados, modelados e elaborados para qualquer pessoa que queira aperfeiçoar seu nível de conhecimento. Os preços sempre são promocionais, somente aqui você encontrará cursos de extrema qualidade por preço baixo."

    return (
        <section className="w-full xl:px-10">
            <div className="py-16 lg:py-24 pl-10 lg:pl-16 w-full bg-gray-200 overflow-hidden">
                <div className="mx-auto max-w-[1280px] 2xl:max-w-[1400px]">
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
                    <Tabs defaultValue="web" className="mt-12 lg:mt-8 w-full">
                        <TabsList className="justify-start w-full overflow-x-auto overflow-y-hidden">
                            <TabsTrigger value="web">
                                Desenvolvimento web
                            </TabsTrigger>
                            <TabsTrigger value="mobile">
                                Desenvolvimento mobile
                            </TabsTrigger>
                            <TabsTrigger value="database">
                                Banco de dados
                            </TabsTrigger>
                            <TabsTrigger value="qa">
                                Quality Assurance
                            </TabsTrigger>
                            <TabsTrigger value="cloud">
                                Cloud Computing
                            </TabsTrigger>
                            <TabsTrigger value="design">
                                Design
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="web">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine frameworks como React.js, Angular.js, Vue.js e muito mais.
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        Refere-se ao processo de criação e manutenção de sites e aplicações para a web. 
                                        Envolve várias disciplinas, incluindo design, programação, e configuração de servidores. 
                                        O desenvolvimento web pode ser dividido em dois principais aspectos: o front-end 
                                        (lado do cliente) e o back-end (lado do servidor). O front-end lida com a interface e 
                                        a experiência do usuário, enquanto o back-end gerencia a lógica, a base de dados e a 
                                        comunicação com o front-end.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesWebDevelopment.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="mobile">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine frameworks como React Native, Flutter, Swift e muito mais.
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        Refere-se à criação de aplicações para dispositivos móveis, como smartphones e tablets. 
                                        Envolve a construção de aplicativos nativos (desenvolvidos especificamente para uma 
                                        plataforma, como iOS ou Android) ou aplicativos híbridos (que podem funcionar em várias
                                        plataformas a partir de um único código-base). O desenvolvimento mobile pode incluir a 
                                        interface do usuário, a lógica de negócios e a integração com serviços e APIs.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesMobileDevelopment.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="database">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine ferramentas como SQL Server, MySQL, NoSQL e muito mais.
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        É um sistema que organiza, armazena e gerencia dados de forma estruturada e eficiente. 
                                        Os bancos de dados permitem o armazenamento e a recuperação de informações de maneira 
                                        rápida e segura. Eles podem ser classificados em diferentes tipos, principalmente com 
                                        base em como os dados são estruturados e acessados. Cada projeto poderá reservar-se de
                                        uma estrutura em que seja melhor utilizar bancos de dados relacionais como o SQL Server
                                        e MySQL ou utilizar o NoSQL.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesDatabase.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="qa">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine ferramentas como Selenium, Cypress, Jest e muito mais
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        Refere-se ao processo de garantir que o software atenda aos padrões de qualidade e funcione 
                                        conforme esperado. O objetivo do QA é identificar e corrigir bugs, melhorar a usabilidade e 
                                        assegurar que o software seja confiável e robusto. O QA pode incluir testes manuais, onde 
                                        testadores executam o software e verificam seu comportamento, e testes automatizados, onde 
                                        ferramentas e scripts são usados para realizar testes repetitivos e garantir que o software 
                                        funcione corretamente em diferentes cenários.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesQualityAssurance.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="cloud">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine ferramentas de Computação na Nuvem
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        Cloud computing é um modelo de fornecimento de recursos computacionais pela internet. Em vez 
                                        de usar servidores locais ou hardware físico próprio, as empresas e indivíduos podem acessar 
                                        e utilizar serviços de computação (como armazenamento, processamento e software) através da 
                                        internet, pagando apenas pelo que utilizam. Isso oferece flexibilidade, escalabilidade e 
                                        custo reduzido.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesCloudComputing.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="design">
                            <div className="mt-6 lg:mt-10 w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-[#3C3B37]">
                                        Domine ferramentas como Photoshop, Corel Draw, Figma e muito mais.
                                    </h3>
                                    <p className="mt-2 lg:mt-0">
                                        Refere-se ao processo de criar e organizar elementos visuais e funcionais para comunicar uma 
                                        mensagem ou resolver um problema. O design pode abarcar várias áreas, incluindo design gráfico, 
                                        design de interface (UI), design de experiência do usuário (UX), e muito mais. O objetivo é criar
                                        soluções estéticas e eficazes que atendam às necessidades do usuário e aos objetivos do projeto.
                                    </p>
                                </div>
                                <div className="box-border">
                                    <Carousel className="w-full">
                                        <CarouselContent className="-ml-1">
                                            {coursesDesign.map((course, index) => (
                                                <CarouselItem
                                                    key={index}
                                                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                                                >
                                                    <div key={index}>
                                                        <div className="w-full h-40 bg-gray-300">

                                                        </div>
                                                        <div className="mt-2">
                                                            <h4 className="text-[14.5px] font-semibold text-[#3C3B37] line-clamp-2">
                                                                {course.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-400">
                                                                {course.author}
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs font-semibold text-[#3C3B37]">
                                                                    {course.rating}
                                                                </p>
                                                                <p className="text-xs text-[#3C3B37]">
                                                                    ({course.buyers})
                                                                </p>
                                                            </div>
                                                            <div className="mt-2 flex items-center gap-2">
                                                                <p className="text-lg font-extrabold text-[#3C3B37]">
                                                                    {course.discountPrice}
                                                                </p>
                                                                <p className="text-sm text-[#3C3B37] line-through">
                                                                    {course.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="mt-8 mr-10 xl:mr-0 flex justify-end gap-2">
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}