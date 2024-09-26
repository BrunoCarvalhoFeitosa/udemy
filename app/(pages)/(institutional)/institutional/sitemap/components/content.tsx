"use client"
import Link from "next/link"

export const Content = () => {
    return (
        <section className="px-5 md:px-16 w-full">
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Página Inicial
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Acessos
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/sign-up">
                            Cadastro
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Institucional
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/institutional/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/acessibility">
                            Quem somos
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/cookies-policy">
                            Fale conosco
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/buy-policy">
                            Ajuda e suporte
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Políticas
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/institutional/use-terms">
                            Termos de uso
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/acessibility">
                            Acessibilidade
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/cookies-policy">
                            Política de cookies
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/buy-policy">
                            Política de compras
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/privacy-policy">
                            Política de privacidade
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Comunidade
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/institutional/use-terms">
                            Udemy Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/acessibility">
                            Torne-se instrutor
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/cookies-policy">
                            Carreiras na Udemy
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/buy-policy">
                            Seja afiliado Udemy
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/privacy-policy">
                            Obtenha o aplicativo
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-xl font-semibold text-zinc-900">
                    Redes sociais
                </h1>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link href="/institutional/use-terms">
                            X.com
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/acessibility">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/cookies-policy">
                            TikTok
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/buy-policy">
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link href="/institutional/privacy-policy">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}