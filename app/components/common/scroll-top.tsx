"use client"
import { useScroll } from "@/hooks/use-scroll-top"
import { Button } from "@/app/components/ui/button"
import { MoveUpIcon } from "lucide-react"

export const ScrollTop = () => {
    const scrolled = useScroll()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-4 right-4 md:bottom-7 md:right-14 z-[9]">
            <Button
                onClick={scrollToTop}
                className={`${scrolled ? "flex" : "hidden"} w-[60px] h-[60px] md:p-4 bg-black hover:bg-black/95 cursor-pointer`}
            >
                <MoveUpIcon className="w-6 h-6 text-white dark:text-black" />
            </Button>
        </div>
    )
}