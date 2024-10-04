"use client"

interface HeaderTitleProps {
    title: string
    description: string
}

export const HeaderTitle = ({ title, description }: HeaderTitleProps) => {
    return (
        <section className="w-full bg-gray-100">
            <div className="mb-8 py-20 md:pl-16 px-5 w-full">
                <h4 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-[#3C3B37]">
                    {title}
                </h4>
                <p className="text-base text-zinc-900">
                    {description}
                </p>
            </div>
        </section>
    )
}