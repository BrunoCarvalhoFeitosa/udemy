"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Por favor, preencha o campo nome corretamente.",
    }),
    email: z.string().min(6, {
        message: "Por favor, preencha o campo e-mail corretamente",
    }).email({
        message: "Por favor, preencha o campo e-mail corretamente.",
    }),
    message: z.string().min(20, {
        message: "Por favor, preencha o campo mensagem com no mínimo 20 caracteres.",
    }).max(1000, {
        message: "Por favor, preencha o campo mensagem com no máximo 1000 caracteres"
    }),
})

export const Content = () => {
    const [charCount, setCharCount] = useState<number>(0)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(event.target.value.length)
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("values", values)
    }

    return (
        <section className="mx-auto px-5 md:px-16 pb-16 w-full">
            <div className="w-full">
                <h2 className="text-3xl font-semibold text-[#3C3B37]">
                    E-mail
                </h2>
                <p>
                    udemy@sac.com
                </p>
            </div>
            <div className="py-12 w-full">
                <h2 className="text-3xl font-semibold text-[#3C3B37]">
                    Telefone
                </h2>
                <p>
                    udemy@sac.com
                </p>
            </div>
            <div className="w-full">
                <div className="mb-5">
                    <h2 className="text-3xl font-semibold text-[#3C3B37]">
                        Formulário
                    </h2>
                    <p>
                        Fique a vontade para entrar em contato conosco. Assim que um dos
                        responsáveis receber sua dúvida, estaremos contentes em respondê-la.
                    </p>
                </div>
                <div className="xl:w-[62%]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-black">
                                            Nome completo
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Nome completo"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-black">
                                            Endereço de e-mail
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Endereço de e-mail"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-black">
                                            Mensagem
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Escreva sua mensagem..."
                                                className="h-44 resize-none rounded-none"
                                                onKeyUp={(event: any) => handleTextareaChange(event)}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="relative -top-5">
                                <p className="text-xs text-zinc-900">
                                    <strong>{charCount}</strong>/1000 caracteres
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-2/4 h-14"
                                >
                                    Enviar dúvida ao suporte
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}