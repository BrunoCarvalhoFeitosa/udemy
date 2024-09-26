import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getDashboardCourses } from "@/actions/get-dashboard-courses"
import { CoursesList } from "@/app/components/common/courses-list"
import { InfoCard } from "@/app/(pages)/(app)/(dashboard)/dashboard/components/info-card"
import { CheckCircleIcon, ClockIcon } from "lucide-react"

const DahsboardPage = async () => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const { completedCourses, coursesInProgress } = await getDashboardCourses(userId)

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                    icon={ClockIcon}
                    label="Em progresso"
                    numberOfItems={coursesInProgress.length}
                />
                <InfoCard
                    variant="success"
                    icon={CheckCircleIcon}
                    label="Completados"
                    numberOfItems={completedCourses.length}
                />
            </div>
            <CoursesList items={[...completedCourses, ...coursesInProgress]} />
        </div>
    )
}

export default DahsboardPage