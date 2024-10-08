"use client"
import { Category, Course } from "@prisma/client"
import { CourseCard } from "@/app/components/common/course-card"

type CourseWithProgressWithCategory = Course & {
    category: Category | null
    chapters: { id: string }[]
    progress: number | null
}

interface CoursesListProps {
    items: CourseWithProgressWithCategory[]
}

export const CoursesList = ({ items }: CoursesListProps) => {
    return (
        <div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {items.map((item) => (
                    <CourseCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}
                        chaptersLength={item.chapters.length}
                        price={item.price!}
                        progress={item.progress}
                        category={item.category?.name!}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="mt-10 text-center">
                    Nenhum curso encontrado.
                </div>
            )}
        </div>
    )
}