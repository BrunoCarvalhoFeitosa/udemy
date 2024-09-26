"use client"
import Image from "next/image"
import Link from "next/link"
import { IconBadge } from "../../(pages)/(app)/(dashboard)/components/icon-badge"
import { BookOpenIcon } from "lucide-react"
import { formatPrice } from "@/lib/format"
import { CourseProgress } from "@/app/components/common/course-progress"

interface CourseCardProps {
    id: string
    title: string
    imageUrl: string
    chaptersLength: number
    price: number
    progress: number | null
    category: string
}

export const CourseCard = ({ id, title, imageUrl, chaptersLength, price, progress, category }: CourseCardProps) => {
    return (
        <Link href={`/courses/${id}`}>
            <div className="group p-3 h-full transition border rounded-lg overflow-hidden hover:shadow-sm">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                        fill
                        src={imageUrl}
                        alt={title}
                        className="object-cover"
                    />
                </div>
                <div className="py-3">
                    <h2 className="text-base font-semibold leading-none">
                        {title}
                    </h2>
                    <h3 className="mt-1 text-xs text-gray-400">
                        {category}
                    </h3>
                    <div className="mt-2 flex items-center gap-x-1">
                        <IconBadge size="sm" icon={BookOpenIcon} />
                        <span className="text-sm">
                            {chaptersLength} {chaptersLength === 1 ? "capítulo" : "capítulos"}
                        </span>
                    </div>
                    {progress !== null ? (
                        <div className="mt-4">
                           <CourseProgress
                                variant={progress === 100 ? "success" : "default"}
                                size="sm"
                                value={progress}
                           />
                        </div>
                    ) : (
                        <div className="mt-3 text-lg font-bold">
                            <p>
                                {formatPrice(price)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}