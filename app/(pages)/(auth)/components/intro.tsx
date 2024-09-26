"use client"

interface IntroProps {
    title: string
    description: string
}

export const Intro = ({title, description}: IntroProps) => {
    return (
        <div className="mb-12 px-5 lg:px-0">
            <h1 className="text-xl md:text-3xl lg:text-xl 2xl:text-4xl leading-tight font-bold text-[#3C3B37]">
                {title} <span className="hidden xl:inline">de aprendizado</span>
            </h1>
            <p className="xl:w-[85%] text-base">
                {description}
            </p>
        </div>
    )
}