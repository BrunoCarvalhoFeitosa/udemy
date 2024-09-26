import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, { params }: { params: { courseId: string }}) {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        const course = await db.course.findUnique({
            where: {
                userId,
                id: params.courseId
            }
        })

        if (!course) {
            return new NextResponse("Not found", { status: 401 })
        }

        const unpublishedCourse = await db.course.update({
            where: {
                userId,
                id: params.courseId
            },
            data: {
                isPublished: false
            }
        })

        return NextResponse.json(unpublishedCourse)
    } catch (error) {
        console.error("[COURSE_UNPUBLISH]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}