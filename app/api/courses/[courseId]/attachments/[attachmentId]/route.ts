import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

export async function DELETE(req: Request, { params }: { params: { courseId: string, attachmentId: string }}) {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        const courseOwner = await db.course.findUnique({
            where: {
                userId,
                id: params.courseId
            }
        })

        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const attachment = await db.attachment.delete({
            where: {
                courseId: params.courseId,
                id: params.attachmentId
            }
        })

        return NextResponse.json(attachment)
    } catch (error) {
        console.error("[ATTACHMENT_ID]", error)
        return new NextResponse("Interal Error", { status: 500 })
    }
}