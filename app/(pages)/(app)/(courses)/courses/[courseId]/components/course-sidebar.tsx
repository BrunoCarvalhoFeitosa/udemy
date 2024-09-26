import { Chapter, Course, UserProgress } from "@prisma/client"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { CourseSidebarItem } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/components/course-sidebar-item"
import { CourseProgress } from "@/app/components/common/course-progress"

interface CourseSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    }
    progressCount: number
}

export const CourseSidebar = async ({ course, progressCount }: CourseSidebarProps) => {
    const { userId } = auth()
    
    if (!userId) {
        return redirect("/dashboard")
    }

    const purchase = await db.purchase.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId: course.id
            }
        }
    })

    return (
        <div className="flex flex-col h-full lg:border-r shadow-sm overflow-y-auto">
            <div className="p-8 flex flex-col min-h-[80px] border-b">
                <div>
                    <h1 className="font-bold">
                        {course.title}
                    </h1>
                </div>
                {purchase && (
                    <div className="mt-10">
                        <CourseProgress
                            variant="default"
                            value={progressCount}
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col w-full">
                {course.chapters.map((chapter) => (
                    <CourseSidebarItem
                        key={chapter.id}
                        id={chapter.id}
                        courseId={course.id}
                        label={chapter.title}
                        isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
                        isLocked={!chapter.isFree && !purchase}
                    />
                ))}
                
            </div>
        </div>
    )
}