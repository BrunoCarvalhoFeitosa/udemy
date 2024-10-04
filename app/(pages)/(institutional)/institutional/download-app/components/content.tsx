"use client"
import { Logo } from "@/app/components/common/logo"
import { Button } from "@/app/components/ui/button"
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation"
import { UdemyShortLogoSvg } from "@/public/svg/udemy-short-logo-svg"
import Link from "next/link"
import { AiFillAndroid } from "react-icons/ai"
import { FaApple } from "react-icons/fa6"

export const Content = () => {
    return (
        <section className="mx-auto px-5 md:px-16 w-full">
            <div className="w-full">
                <div className="flex flex-col overflow-hidden">
                    <ContainerScroll
                        titleComponent={
                            <div className="text-[#3C3B37]">
                                <h1 className="text-4xl font-semibold leading-none">
                                    Baixe agora o app
                                </h1>
                                <h2 className="text-4xl md:text-[6rem] font-bold leading-none">
                                    Evolua sua carreira
                                </h2>
                            </div>
                        }
                    >
                        <div className="p-5">
                            <div className="mb-16">
                                <Logo width="130" height="50" url="/" />
                            </div>
                            <div className="mb-10">
                                <h3 className="text-3xl md:text-4xl font-bold leading-none text-[#3C3B37]">
                                    Aprenda o que quiser agora
                                </h3>
                                <p className="mt-2">
                                    Baixe o app Android ou iOS e inicie seus estudos hoje mesmo. Na Udemy você aprende
                                    desenvolver aplicativos, desenvolver sites, aprende sobre negócios, finanças, contabilidade, tecnologia da informação, marketing, fotografia e vídeo, inglês, espanhol, francês, matemática, saúde, música e muito mais. 
                                </p>
                            </div>
                            <div className="mb-6 hidden md:flex items-center gap-4">
                                <div className="w-14 h-14 flex justify-center items-center bg-white rounded-lg">
                                    <UdemyShortLogoSvg width="60" height="30" />
                                </div>
                                <div className="flex flex-col items-center gap-y-1">
                                    <span className="text-sm font-bold leading-none">
                                        4,7
                                    </span>
                                    <span className="text-sm leading-none">
                                        461 mil avaliações
                                    </span>
                                </div>
                                <div className="w-[1px] h-6 bg-gray-300" />
                                <div className="flex flex-col items-center gap-y-1">
                                    <span className="text-sm font-bold leading-none">
                                        10 mi+
                                    </span>
                                    <span className="text-sm leading-none">
                                        Downloads
                                    </span>
                                </div>
                                <div className="w-[1px] h-6 bg-gray-300" />
                                <div className="flex flex-col items-center gap-y-1">
                                    <span className="flex justify-center items-center w-5 h-5 bg-emerald-600 rounded-sm text-sm font-bold">
                                        L
                                    </span>
                                    <span className="text-sm leading-none">
                                        Classificação livre
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.udemy.android&hl=pt_BR"
                                    className="flex-1 w-full md:w-fit md:flex-none"
                                >
                                    <Button
                                        type="button"
                                        size="lg"
                                        variant="outline"
                                        className="flex justify-center gap-x-2 md:w-[250px] h-14 bg-gray-50 hover:bg-black hover:text-white rounded-md"
                                    >
                                        <AiFillAndroid className="w-7 h-7" />
                                        Download Android
                                    </Button>
                                </Link>
                                <Link
                                    href="https://apps.apple.com/br/app/udemy-online-video-courses/id562413829"
                                    className="flex-1 w-full md:w-fit md:flex-none"
                                >
                                    <Button
                                        type="button"
                                        size="lg"
                                        variant="outline"
                                        className="flex justify-center gap-x-2 md:w-[250px] h-14 bg-gray-50 hover:bg-black hover:text-white rounded-md"
                                    >
                                        <FaApple className="w-7 h-7" />
                                        Download iOS
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </ContainerScroll>
                </div>
            </div>
        </section>
    )
}