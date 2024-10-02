"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { FaXTwitter } from "react-icons/fa6"

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string
        name: string
        title: string
        date: string
    }[]
    direction?: "left" | "right"
    speed?: "fast" | "normal" | "slow"
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLUListElement>(null)
    const [start, setStart] = useState(false)

    useEffect(() => {
        addAnimation()
    }, [])

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)

                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                )
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                )
            }
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s")
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s")
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s")
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={item.name}
                        className="group w-[350px] max-w-full relative border flex-shrink-0 px-8 py-6 md:w-[450px]"
                        style={{background: "#FFF"}}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            />
                            <span className="relative text-base leading-[1.6] font-normal z-20">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row justify-between items-start">
                                <div className="flex flex-col">
                                    <strong className="text-lg leading-none text-zinc-700 font-bold">
                                        {item.name}
                                    </strong>
                                    <span className="text-base">
                                        {item.title}
                                    </span>
                                    <span className="text-base text-gray-400">
                                        {item.date}
                                    </span>
                                </div>
                                <div className="flex justify-center items-center w-14 h-14 rounded-full transition-colors duration-200 group-hover:bg-gray-200 cursor-pointer">
                                    <FaXTwitter className="w-6 h-6 fill-black" />
                                </div>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    )
}