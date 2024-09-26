"use client"
import { useState } from "react"
import * as Clerk from "@clerk/elements/common"
import * as SignIn from "@clerk/elements/sign-in"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Intro } from "@/app/(pages)/(auth)/components/intro"
import { Button } from "@/app/components/ui/button"
import { GoogleIconSvg } from "@/public/svg/social-google-icon-svg"
import { MicrosoftIconSvg } from "@/public/svg/social-microsoft-icon-svg"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export const SignInForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false)
    const [showConfirmationPassword, setShowConfirmationPassword] = useState<boolean>(false)
    
    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowOrHideNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    }

    const handleShowOrHideConformationPassword = () => {
        setShowConfirmationPassword(!showConfirmationPassword)
    }

    return (
        <div className="min-h-96">
            <Intro
                title="Entre e inicie sua jornada"
                description="Explore uma vasta variedade de cursos que envolvem diversas áreas do conhecimento."
            />
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full space-y-6 py-2 px-5 lg:px-0"
                >
                    <Clerk.GlobalError className="block text-sm text-red-600" />
                    <Clerk.Field name="identifier">
                        <Clerk.Label className="pl-2 font-semibold">
                            Insira seu endereço de e-mail cadastrado
                        </Clerk.Label>
                        <Clerk.Input
                            required
                            aria-required="true"
                            type="email"
                            placeholder="Endereço de e-mail cadastrado"
                            autoComplete="off"
                            className="w-full border-b border-gray-200 bg-transparent p-2 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                        />
                        <Clerk.FieldError className="mt-2 block text-xs font-semibold text-red-600">
                            <span>
                                Insira um e-mail válido.
                            </span>
                        </Clerk.FieldError>
                    </Clerk.Field>
                    <SignIn.Action
                        submit
                        className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                    >
                        Acessar minha conta
                    </SignIn.Action>
                    <div className="p-5">
                        <div className="mb-10 flex items-center gap-3">
                            <div className="flex-1 w-full h-[1px] bg-gray-200" />
                            <p className="text-center text-sm/5 text-neutral-500">
                                ou entre com:
                            </p>
                            <div className="flex-1 w-full h-[1px] bg-gray-200" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <Clerk.Connection
                                    name="google"
                                    className="w-14 h-14 border-b-4 border-gray-300 flex items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm md:text-base font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                                >
                                    <GoogleIconSvg width="20" height="20" />
                                </Clerk.Connection>
                            </div>
                            <div>
                                <Clerk.Connection
                                    name="microsoft"
                                    className="w-14 h-14 border-b-4 border-gray-300 flex items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm md:text-base font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                                >
                                    <MicrosoftIconSvg width="20" height="20" />
                                </Clerk.Connection>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-sm md:text-base">
                            Não tem uma conta?
                        </div>
                        <div>
                            <Link
                                href="/sign-up"
                                className="rounded px-1 py-0.5 text-sm md:text-base text-neutral-700 outline-none underline"
                            >
                                Cadastre-se agora
                            </Link>
                        </div>
                    </div>
                </SignIn.Step>
                <SignIn.Step
                    name="verifications"
                    className="w-full space-y-6 py-2 px-4 md:px-0"
                >
                    <SignIn.Strategy name="password">
                        <Clerk.Field name="identifier" className="relative">
                            <Clerk.Label className="pl-2 font-semibold">
                                Insira sua senha cadastrada
                            </Clerk.Label>
                            <Clerk.Input
                                required
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                placeholder="Senha cadastrada"
                                className="w-full border-b border-gray-200 bg-transparent p-2 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="p-0 absolute top-2/4 -translate-y-2/4 right-2"
                                onClick={handleShowOrHidePassword}
                            >
                                {showPassword ? (
                                    <AiFillEyeInvisible className="w-7 h-7 text-gray-400" />
                                ) : (
                                    <AiFillEye className="w-7 h-7 text-gray-400" />
                                )}
                            </Button>
                            <Clerk.FieldError className="mt-2 block text-xs font-semibold text-red-600">
                                <span>
                                    Insira uma senha válida.
                                </span>
                            </Clerk.FieldError>
                        </Clerk.Field>
                        <SignIn.Action
                            submit
                            className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                        >
                            Acessar minha conta
                        </SignIn.Action>
                        <div className="flex justify-center gap-1">
                            <div>
                                Esqueceu sua senha ?
                            </div>
                            <SignIn.Action
                                navigate="forgot-password"
                                className="underline"
                            >
                                Recupere-a agora
                            </SignIn.Action>
                        </div>
                    </SignIn.Strategy>
                    <SignIn.Strategy name="reset_password_email_code">
                        <div className="mb-10">
                            <h1 className="text-xl font-bold text-[#3C3B37]">
                                Um código foi enviado ao seu e-mail
                            </h1>
                            <p>
                                Nós enviamos um código para <span className="text-gray-400"><SignIn.SafeIdentifier /></span>.
                            </p>
                        </div>
                        <Clerk.Field name="code">
                            <Clerk.Label className="sr-only">
                                Código de verificação
                            </Clerk.Label>
                            <Clerk.Input
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
                            <Clerk.FieldError className="mt-2 block text-xs font-semibold text-red-600">
                                <span>
                                    Insira um código OTP válido. 
                                </span>
                            </Clerk.FieldError>
                        </Clerk.Field>
                        <SignIn.Action
                            submit
                            className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                        >
                            Recuperar senha agora
                        </SignIn.Action>
                    </SignIn.Strategy>
                </SignIn.Step>
                <SignIn.Step
                    name="forgot-password"
                    className="space-y-6"
                >
                    <h1 className="font-bold">
                        Clique em "resetar senha agora", um código será enviado ao seu e-mail.
                    </h1>
                    <div className="flex flex-col items-center gap-3">
                        <SignIn.SupportedStrategy
                            name="reset_password_email_code"
                            asChild
                        >
                            <Button className="px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg">
                                Resetar senha agora
                            </Button>
                        </SignIn.SupportedStrategy>
                        <SignIn.Action navigate="previous">
                            Voltar
                        </SignIn.Action>
                    </div>
                </SignIn.Step>
                <SignIn.Step name="reset-password">
                    <div className="mb-10">
                        <h1 className="text-xl font-bold text-[#3C3B37]">
                            Código verificado
                        </h1>
                        <p>
                            Tudo certo para recuperação do seu acesso, insira a nova senha.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Clerk.Field name="password" className="relative">
                            <Clerk.Label className="sr-only">
                                Nova senha
                            </Clerk.Label>
                            <Clerk.Input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="Nova senha"
                                className="w-full border-b border-gray-200 bg-transparent p-2 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="p-0 absolute top-2/4 -translate-y-2/4 right-2"
                                onClick={handleShowOrHideNewPassword}
                            >
                                {showNewPassword ? (
                                    <AiFillEyeInvisible className="w-7 h-7 text-gray-400" />
                                ) : (
                                    <AiFillEye className="w-7 h-7 text-gray-400" />
                                )}
                            </Button>
                            <Clerk.FieldError className="mt-2 block text-xs font-semibold text-red-600">
                                <span>
                                    Insira uma nova senha válida.
                                </span>
                            </Clerk.FieldError>
                        </Clerk.Field>
                        <Clerk.Field name="confirmPassword" className="relative">
                            <Clerk.Label className="sr-only">
                                Confirme a nova senha
                            </Clerk.Label>
                            <Clerk.Input
                                type={showConfirmationPassword ? "text" : "password"}
                                placeholder="Confirme a nova senha"
                                className="w-full border-b border-gray-200 bg-transparent p-2 text-sm/6 md:text-base text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-200 focus:border-neutral-300 data-[invalid]:placeholder:text-red-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="p-0 absolute top-2/4 -translate-y-2/4 right-2"
                                onClick={handleShowOrHideConformationPassword}
                            >
                                {showConfirmationPassword ? (
                                    <AiFillEyeInvisible className="w-7 h-7 text-gray-400" />
                                ) : (
                                    <AiFillEye className="w-7 h-7 text-gray-400" />
                                )}
                            </Button>
                            <Clerk.FieldError className="mt-2 block text-xs font-semibold text-red-600">
                                <span>
                                    Insira novamente a nova senha para confirmação.
                                </span>
                            </Clerk.FieldError>
                        </Clerk.Field>
                    </div>
                    <SignIn.Action
                        submit
                        className="mt-6 px-8 w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#EC5250] text-primary-foreground hover:opacity-90 border-b-[6px] border-[#AF5250] h-14 md:h-16 text-xs md:text-lg"
                    >
                        Resetar senha agora
                    </SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    )
}
