import { Chapter, Course, UserProgress } from "@prisma/client"
import { NavbarRoutes } from "@/app/components/common/navbar-routes"
import { CourseMobileSidebar } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/components/course-mobile-sidebar"

interface CourseNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    }
    progressCount: number
}

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
    return (
        <div className="p-4 flex items-center h-full border-b bg-white shadow-sm">
            <CourseMobileSidebar
                course={course}
                progressCount={progressCount}
            />
            <NavbarRoutes />
        </div>
    )
}