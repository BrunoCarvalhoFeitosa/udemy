import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function POST(req: Request, { params }: { params: { courseId: string }}) {
    try {
        const { userId } = auth()
        const { title } = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        const courseOwner =  await db.course.findUnique({
            where: {
                userId,
                id: params.courseId
            }
        })
        
        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const lastChapter = await db.chapter.findFirst({
            where: {
                courseId: params.courseId
            },
            orderBy: {
                position: "desc"
            }
        })

        const position = lastChapter ? lastChapter.position + 1 : 1

        const chapter = await db.chapter.create({
            data: {
                title,
                courseId: params.courseId,
                position
            }
        })

        return NextResponse.json(chapter)
    } catch (error) {
        console.error("[CHAPTERS]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}