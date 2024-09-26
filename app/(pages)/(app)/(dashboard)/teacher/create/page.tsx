"use client"
import axios from "axios"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import toast from "react-hot-toast"

const formSchema = z.object({
    title: z.string().min(1, {
        message: "O título é obrigatório."
    })
})

const CreatePage = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/courses", values)
            router.push(`/teacher/courses/${response.data.id}`)
            toast.success("Curso criado com sucesso.")
        } catch (error) {
            console.error("Error while create course: ", error)
            toast.error("Erro ao criar curso.")
        }
    }

    return (
        <div className="mt-6 mx-auto max-w-5xl xl:max-w-7xl pb-6 px-3 flex flex-col md:justify-center md:items-center h-full">
            <div className="mb-8 w-full">
                <h1 className="text-2xl font-semibold text-[#3C3B37]">
                    Nome do curso
                </h1>
                <p className="text-gray-500">
                    Como você gostaria que o curso se chamasse? Não se preocupe,
                    você poderá mudar depois.
                </p>
            </div>
            <div className="w-full">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            name="title"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">
                                        Título do curso
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder='e.g. "Desenvolvimento web avançado"'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        O que você ensinará nesse curso?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Link href="/dashboard">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="lg"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={!isValid ?? isSubmitting}
                            >
                                Continuar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreatePage