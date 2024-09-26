"use client"
import { useState } from "react"
import { Course } from "@prisma/client"
import axios from "axios"
import * as z from "zod"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Combobox } from "@/app/components/ui/combobox"
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/app/components/ui/form"
import { SettingsIcon } from "lucide-react"

interface FormCategoryProps {
    initialData: Course
    courseId: string
    options: { label: string; value: string }[]
}

const formSchema = z.object({
    categoryId: z.string().min(1, {
        message: "A categoria é obrigatória."
    })
})

export const FormCategory = ({ initialData, courseId, options }: FormCategoryProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: initialData?.categoryId ?? ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const selectedOption = options.find((option) => option.value === initialData.categoryId)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("Categoria do curso criada com sucesso.")
            toggleEdit()
            router.refresh()
        } catch (error) {
            console.error("Error while update course category: ", error)
            toast.error("Algo deu errado.")
        }
    }

    return (
        <div className="mt-6 p-4 border bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-semibold">
                        Categoria do curso
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
                        !initialData.categoryId && "text-gray-500 italic"
                    )}>
                        {selectedOption?.label ?? "Nenhuma categoria definida."}
                    </p>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-4 space-y-4"
                        >
                            <FormField
                                name="categoryId"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Combobox
                                                options={options}
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