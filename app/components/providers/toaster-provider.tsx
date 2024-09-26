"use client"
import { Toaster } from "react-hot-toast"

export const ToasterProvider = () => {
    return <Toaster toastOptions={{
        position: "bottom-right"
    }} />
}