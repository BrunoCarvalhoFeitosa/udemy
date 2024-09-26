import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { getProgress } from "@/actions/get-progress"
import { CourseSidebar } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/components/course-sidebar"
import { CourseNavbar } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/components/course-navbar"

const CourseLayout = async ({ children, params }: { children: React.ReactNode, params: { courseId: string } }) => {
    const { userId } = auth()
    
    if (!userId) {
        return redirect("/dashboard")
    }
    
    const course = await db.course.findUnique({
        where: {
            id: params.courseId
        },
        include: {
            chapters: {
                where: {
                    isPublished: true
                },
                include: {
                    userProgress: {
                        where: {
                            userId
                        }
                    }
                },
                orderBy: {
                    position: "asc"
                }
            }
        }
    })
    
    if (!course) {
        return redirect("/dashboard")
    }

    const progressCount = await getProgress(userId, course.id)

    return (
        <div className="h-full">
            <div className="fixed inset-y-0 lg:pl-96 w-full h-[80px] z-50">
                <CourseNavbar
                    course={course}
                    progressCount={progressCount}
                />
            </div>
            <div className="hidden lg:flex flex-col w-96 h-full fixed inset-y-0 z-50">
                <CourseSidebar
                    course={course}
                    progressCount={progressCount}
                />
            </div>
            <main className="lg:pl-96 h-full">
                {children}
            </main>
        </div>
    )
}

export default CourseLayout