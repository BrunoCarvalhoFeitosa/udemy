"use client"
import Link from "next/link"
import { UdemyLogoSvg } from "@/public/svg/udemy-logo-svg"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-full">
                <Image
                    src="/image/image-footer.jpg"
                    width={3000}
                    height={1500}
                    alt="Estudante em seu quarto com um notebook"
                    className="w-full"
                />
            </div>
            <div className="py-5 px-5 lg:px-10 border-b">
                <div className="py-10 flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-12 lg:gap-32 xl:gap-52 text-center md:text-start">
                    <div>
                        <h6 className="mb-4 font-semibold text-lg">
                            Institucional
                        </h6>
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">
                                <Link href="/institutional/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/about-us">
                                    Quem somos
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/contact-us">
                                    Fale conosco
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/sitemap">
                                    Mapa do site
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="mb-4 font-semibold text-lg">
                            Políticas
                        </h6>
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">
                                <Link href="/institutional/use-terms">
                                    Termos de uso
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/acessibility">
                                    Acessibilidade
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/cookies-policy">
                                    Política de cookies
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/privacy-policy">
                                    Política de privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="mb-4 font-semibold text-lg">
                            Comunidade
                        </h6>
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">
                                Udemy Business
                            </li>
                            <li className="cursor-pointer">
                                Torne-se instrutor
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/career">
                                    Carreiras na Udemy
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="/institutional/download-app">
                                    Obtenha o aplicativo
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="mb-4 font-semibold text-lg">
                            Social
                        </h6>
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">
                                <Link href="https://www.instagram.com/udemy">
                                    Instagram
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="https://www.tiktok.com/@udemy">
                                    TikTok
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="https://www.facebook.com/udemy/?locale=pt_BR">
                                    Facebook
                                </Link>
                            </li>
                            <li className="cursor-pointer">
                                <Link href="https://www.linkedin.com/company/udemybrasil">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 px-5 lg:px-10 flex items-center gap-2">
                <div>
                    <UdemyLogoSvg width="130" height="40" />
                </div>
                <div>
                    <strong className="relative top-0.5 text-base font-medium text-[#3C3B37]">
                        ©2024-2025 Udemy, Inc.
                    </strong>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1 w-full h-2 bg-[#EC5250]" />
                <div className="flex-1 w-full h-2 bg-[#EC5250]/75" />
                <div className="flex-1 w-full h-2 bg-[#EC5250]/45" />
            </div>
        </footer>
    )
}