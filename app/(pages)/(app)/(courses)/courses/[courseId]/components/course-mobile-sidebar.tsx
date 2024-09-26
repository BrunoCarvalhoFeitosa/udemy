import { Chapter, Course, UserProgress } from "@prisma/client"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { CourseSidebar } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/components/course-sidebar"
import { MenuIcon } from "lucide-react"

interface CourseMobileSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null
        })[]
    }
    progressCount: number
}

export const CourseMobileSidebar = ({ course, progressCount }: CourseMobileSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white w-70">
                <CourseSidebar
                    course={course}
                    progressCount={progressCount}
                />
            </SheetContent>
        </Sheet>
    )
}