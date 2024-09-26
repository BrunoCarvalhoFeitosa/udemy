"use client"
import { formatPrice } from "@/lib/format"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

interface CourseEnrollButtonProps {
    courseId: string
    price: number
}

export const CourseEnrollButton = ({ courseId, price }: CourseEnrollButtonProps) => {
    const [isLoading, setisLoading] = useState<boolean>(false)

    const onClick = async () => {
        try {
            setisLoading(true)

            const response = await axios.post(`/api/courses/${courseId}/checkout`)

            window.location.assign(response.data.url)
        } catch (error) {
            toast.error("Algo deu errado.")
        } finally {
            setisLoading(false)
        }
    }

    return (
        <Button
            disabled={isLoading}
            type="button"
            size="lg"
            className="w-full md:w-fit"
            onClick={onClick}
        >
            Compre por {formatPrice(price)}
        </Button>
    )
}