"use client"
import { useState } from "react"
import { Course } from "@prisma/client"
import axios from "axios"
import * as z from "zod"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/format"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { SettingsIcon } from "lucide-react"

interface FormPriceProps {
    initialData: Course
    courseId: string
}

const formSchema = z.object({
    price: z.coerce.number()
})

export const FormPrice = ({ initialData, courseId }: FormPriceProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: initialData?.price ?? undefined
        }
    })

    const { isSubmitting, isValid } = form.formState

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("Preço do curso alterado com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course price: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Preço do curso
                    </span>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        className="p-0"
                        onClick={toggleEdit}
                    >
                        {isEditing ? (
                            <>
                                Cancelar
                            </>
                        ) : (
                            <>
                                <SettingsIcon />
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                {!isEditing ? (
                    <p className={cn(
                        "mt-2 text-sm",
                        !initialData.price && "text-gray-500 italic"
                    )}>
                        {initialData.price
                            ? formatPrice(initialData.price)
                            : "Nenhum preço criado."
                        }
                    </p>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="price"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                step="0.01"
                                                disabled={isSubmitting}
                                                placeholder="Valor do curso"
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
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </div>
    )
}