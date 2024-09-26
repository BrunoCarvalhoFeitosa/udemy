"use client"
import { useEffect, useRef, useState, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { Button } from "@/app/components/ui/button"
import { IoMdClose } from "react-icons/io"
import { MoveLeftIcon, MoveRightIcon } from "lucide-react"

interface CarouselProps {
    items: JSX.Element[]
    initialScroll?: number
}

type Card = {
    src: string
    title: string
    category: string
    content: React.ReactNode
}

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void
    currentIndex: number
}>({
    onCardClose: () => {},
    currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (carouselRef.current) {
        carouselRef.current.scrollLeft = initialScroll
        checkScrollability()
        }
    }, [initialScroll])

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
        }
    }

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384
            const gap = isMobile() ? 4 : 8
            const scrollPosition = (cardWidth + gap) * (index + 1)

            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            })

            setCurrentIndex(index)
        }
    }

    const isMobile = () => {
        return window && window.innerWidth < 768
    }

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div className="relative w-full">
                <div
                    className="py-10 flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                        "absolute right-0 h-auto w-[5%] overflow-hidden bg-gradient-to-l z-[1000]"
                        )}
                    />
                    <div
                        className={cn(
                        "flex flex-row justify-start gap-4",
                        "mx-auto max-w-[1280px] 2xl:max-w-[1400px]"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-2 mr-10">
                    <Button
                        className="relative z-40 h-14 w-14 rounded-full bg-gray-200 hover:bg-gray-400/40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <MoveLeftIcon className="w-8 h-8 text-gray-500" />
                    </Button>
                    <Button
                        className="relative z-40 h-14 w-14 rounded-full bg-gray-200 hover:bg-gray-400/40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <MoveRightIcon className="w-8 h-8 text-gray-500" />
                    </Button>
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: Card
    index: number
    layout?: boolean
}) => {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { onCardClose } = useContext(CarouselContext)

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose()
            }
        }

        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open])

    useOutsideClick(containerRef, () => handleClose())

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        onCardClose(index)
    }

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="relative mx-auto lg:my-10 p-4 md:p-10 max-w-5xl min-h-[100dvh] bg-white dark:bg-neutral-900 z-[60]"
                        >
                            <Button
                                className="sticky top-4 p-0 w-12 h-12 right-0 ml-auto bg-black hover:bg-black/85 dark:bg-white rounded-full flex items-center justify-center"
                                onClick={handleClose}
                            >
                                <IoMdClose className="w-6 h-6 text-neutral-100 dark:text-neutral-900" />
                            </Button>
                            <motion.p
                                layoutId={layout ? `category-${card.title}` : undefined}
                                className="text-base font-medium text-black dark:text-white"
                            >
                                {card.category}
                            </motion.p>
                            <motion.p
                                layoutId={layout ? `title-${card.title}` : undefined}
                                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                            >
                                {card.title}
                            </motion.p>
                            <div className="py-10">
                                {card.content}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="group relative rounded-3xl bg-gray-100 dark:bg-neutral-900 w-56 h-80 md:h-[38rem] md:w-96 overflow-hidden flex flex-col items-start justify-start z-10"
            >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative p-6 md:p-8 z-40">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white text-sm md:text-base font-medium text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-lg md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-35"
                />
            </motion.button>
        </>
    )
}

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true)

    return (
        <Image
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    )
}