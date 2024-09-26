import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ToasterProvider } from "@/app/components/providers/toaster-provider"
import { ConfettiProvider } from "@/app/components/providers/confetti-provider"
import { ptBR } from "@clerk/localizations"
import "./globals.css"

const font = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Udemy - aprenda o que quiser, quando quiser",
    description: "A Udemy é um marketplace de cursos online com mais de 250.000 cursos e 73 milhões milhões de alunos. Aprenda no vagão. Programação, Marketing, Excel e muito mais.",
    icons: {
      icon: "/favicon/favicon.svg",
      shortcut: "/favicon/favicon.svg"
      },
      authors: {
          name: "Bruno Carvalho Feitosa",
          url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
      }
  }

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider
            localization={ptBR}
            signInFallbackRedirectUrl="/dashboard"
        >
            <html lang="pt-BR">
                <body className={font.className}>
                    {children}
                    <ToasterProvider />
                    <ConfettiProvider />
                </body>
            </html>
        </ClerkProvider>
    )
}