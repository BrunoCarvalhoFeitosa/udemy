"use client"
import { useState } from "react"
import { Chapter, Course } from "@prisma/client"
import axios from "axios"
import * as z from "zod"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { ChaptersList } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/chapters-list"
import { Loader2Icon, PlusIcon } from "lucide-react"

interface FormChaptersProps {
    initialData: Course & { chapters: Chapter[] }
    courseId: string
}

const formSchema = z.object({
    title: z.string().min(1, {
        message: "O título do capítulo é obrigatório."
    })
})

export const FormChapters = ({ initialData, courseId }: FormChaptersProps) => {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [isUpdating, setIsUpdating] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const toggleCreating = () => {
        setIsCreating(!isCreating)
    }

    const onReorder = async (updatedData: { id: string; position: number }[]) => {
        try {
            setIsUpdating(true)

            axios.put(`/api/courses/${courseId}/chapters/reorder`, {
                list: updatedData
            })

            toast.success("Capítulo reordenado.")
            router.refresh()
        } catch (error) {
            console.error("Error while reorder chapter.", error)
            toast.error("Erro ao reordenar capítulo.")
        } finally {
            setIsUpdating(false)
        }
    }

    const onEdit = (id: string) => {
        router.push(`/teacher/courses/${courseId}/chapters/${id}`)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/chapters`, values)
            toast.success("Capítulo do curso criado com sucesso.")
            toggleCreating()
            router.refresh()
        } catch (error) {
            console.error("Error while update course description: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="relative mt-6 p-4 border bg-gray-100">
            {isUpdating && (
                <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center bg-gray-500/60 z-20">
                    <Loader2Icon className="w-5 h-5 animate-spin" />
                </div>  
            )}
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Capítulos do curso
                    </span>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        className="p-0"
                        onClick={toggleCreating}
                    >
                        {isCreating ? (
                            <>
                                Cancelar
                            </>
                        ) : (
                            <>
                                <PlusIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {isCreating && (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="title"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="e.g. Nome do capítulo do curso"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center gap-x-2">
                                <Button
                                    disabled={!isValid ?? isSubmitting}
                                    type="submit"
                                    size="lg"
                                >
                                    Criar
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
                {!isCreating && (
                    <div className={cn(
                        "mt-2 text-sm",
                        !initialData.chapters.length && "text-gray-500 italic"
                    )}>
                        <div className="mb-2">
                            <p>
                                {!initialData.chapters.length && "Nenhum capitúlo criado."}
                            </p>
                        </div>
                        <ChaptersList
                            items={initialData.chapters ?? []}
                            onEdit={onEdit}
                            onReorder={onReorder}
                        />
                    </div>
                )}
                {!isCreating && (
                    <div className="mt-4">
                        <p className="text-xs text-gray-500">
                            Clique e arraste para reordenar os capítulos
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}