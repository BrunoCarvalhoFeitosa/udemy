"use client"
import { useState } from "react"
import * as Clerk from "@clerk/elements/common"
import * as SignUp from "@clerk/elements/sign-up"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Intro } from "@/app/(pages)/(auth)/components/intro"
import { Button } from "@/app/components/ui/button"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    return (
        <div className="min-h-96">
            <Intro
                title="Cadastre-se e inicie sua jornada"
                description="Explore uma vasta variedade de cursos que envolvem diversas áreas do conhecimento."
            />
            <SignUp.Root>
                <SignUp.Step
                    name="start"
                    className="w-full space-y-6 rounded-2xl py-2 px-4 md:px-0"
                >
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 w-full">
                            <Clerk.Field name="firstName" className="flex-1 space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder="Nome"
                                    autoComplete="off"
                                    className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                            <Clerk.Field name="lastName" className="flex-1 space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder="Sobrenome"
                                    autoComplete="off"
                                    className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                        </div>
                        <Clerk.Field name="username" className="space-y-2">
                                <Clerk.Input
                                    required
                                    type="text"
                                    placeholder="Nome de usuário visível na plataforma"
                                    autoComplete="off"
                                    className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                                />
                                <Clerk.FieldError className="block text-sm text-red-400" />
                            </Clerk.Field>
                        <Clerk.Field name="emailAddress" className="space-y-2">
                            <Clerk.Input
                                required
                                type="email"
                                placeholder="Endereço de e-mail"
                                autoComplete="off"
                                onChange={handleEmailChange}
                                className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                        <Clerk.Field name="password" className="relative space-y-2">
                            <Clerk.Input
                                required
                                type={showPassword ? "text" : "password"}
                                placeholder="Senha"
                                className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="p-0 absolute -top-3 right-0"
                                onClick={handleShowOrHidePassword}
                            >
                                {showPassword ? (
                                    <AiFillEyeInvisible className="w-7 h-7 text-gray-400" />
                                ) : (
                                    <AiFillEye className="w-7 h-7 text-gray-400" />
                                )}
                            </Button>
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                    </div>
                    <SignUp.Action
                        submit
                        className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                    >
                        Criar minha conta
                    </SignUp.Action>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            Já tem uma conta?
                        </div>
                        <div>
                            <Link
                                href="/sign-in"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                Faça login agora
                            </Link>
                        </div>
                    </div>
                </SignUp.Step>
                <SignUp.Step
                    name="verifications"
                    className="w-full space-y-6 rounded-2xl py-2 px-5 lg:px-0"
                >
                    <header>
                        <h1 className="mt-4 text-base md:text-lg xl:text-2xl font-bold tracking-tight text-[#3C3B37]">
                            Um código foi enviado ao seu e-mail
                        </h1>
                        <p>
                            Nós enviamos um código para <span className="text-gray-400">{email}</span>
                        </p>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <SignUp.Strategy name="email_code">
                        <Clerk.Field name="code" className="space-y-2">
                            <Clerk.Input
                                required
                                type="otp"
                                autoSubmit
                                className="flex has-[:disabled]:opacity-50"
                                render={({ value, status }) => {
                                    return (
                                        <div
                                            data-status={status}
                                            className={cn(
                                                "relative flex w-full h-16 md:h-20 lg:h-16 xl:h-28 items-center justify-center border-y border-r border-input text-2xl font-bold transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                                                {
                                                    "z-10 ring-2 ring-ring ring-offset-background":
                                                    status === "cursor" || status === "selected",
                                                },
                                            )}
                                        >
                                            {value}
                                            {status === "cursor" && (
                                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                            </div>
                                            )}
                                        </div>
                                    )
                                }}
                            />
                            <Clerk.FieldError className="block text-sm font-semibold text-red-400">
                                <span>
                                    Código inválido.
                                </span>
                            </Clerk.FieldError>
                        </Clerk.Field>
                        <SignUp.Action
                            submit
                            className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                        >
                            Verificar código agora
                        </SignUp.Action>
                    </SignUp.Strategy>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            Já tem uma conta?
                        </div>
                        <div>
                            <Link
                                href="/sign-in"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                Faça login agora
                            </Link>
                        </div>
                    </div>
                </SignUp.Step>
                <SignUp.Step
                    name="continue"
                    className="w-full space-y-6 rounded-2xl py-2 md:py-10 px-4 md:px-0"
                >
                <header>
                    <h1 className="mt-4 text-base md:text-xl font-medium tracking-tight">
                        Continuar o cadastro
                    </h1>
                </header>
                <Clerk.GlobalError className="block text-sm text-red-400" />
                <Clerk.Field name="username" className="space-y-2">
                    <Clerk.Input
                        required
                        type="text"
                        placeholder="Nome"
                        className="p-2 w-full border-b border-gray-200 bg-transparent text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                    />
                    <Clerk.FieldError className="block text-sm text-red-400" />
                </Clerk.Field>
                <SignUp.Action
                    submit
                    className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700 h-14 md:h-16 rounded-md px-8 text-xs md:text-base"
                >
                    Verificar
                </SignUp.Action>
                </SignUp.Step>
            </SignUp.Root>
        </div>
    )
}