import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { DataTable } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/components/data-table"
import { columns } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/components/columns"

const CoursesPage = async () => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const courses = await db.course.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <div className="p-6">
            <DataTable columns={columns} data={courses} />
        </div>
    )
}

export default CoursesPage