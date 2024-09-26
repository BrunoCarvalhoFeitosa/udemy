import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import Mux from "@mux/mux-node"

const muxTokenId = process.env.MUX_TOKEN_ID
const muxTokenSecret = process.env.MUX_TOKEN_SECRET

if (!muxTokenId || !muxTokenSecret) {
    throw new Error("MUX_TOKEN_ID and MUX_TOKEN_SECRET must be defined in the environment variables.")
}

const mux = new Mux({
    tokenId: muxTokenId,
    tokenSecret: muxTokenSecret
})

const { video } = mux

export async function PATCH(req: Request, { params }: { params: { courseId: string } }) {
    try {
        const { userId } = auth()
        const { courseId } = params
        const values = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const course = await db.course.update({
            where: {
                userId,
                id: courseId
            },
            data: {
                ...values
            }
        })

        if (!course) {
            return new NextResponse("Not found", { status: 404 })
        }
        
        return NextResponse.json(values)
    } catch (error) {
        console.error("[COURSE_ID]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { courseId: string } }) {
    try {
        const { userId } = auth()
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        const course = await db.course.findUnique({
            where: {
                userId,
                id: params.courseId
            },
            include: {
                chapters: {
                    include: {
                        muxData: true
                    }
                }
            }
        })

        if (!course) {
            return new NextResponse("Not found", { status: 404 })
        }

        for (const chapter of course.chapters) {
            if (chapter.muxData?.assetId) {
                await video.assets.delete(chapter.muxData.assetId)
            }
        }

        const deleteCourse = await db.course.delete({
            where: {
                id: params.courseId
            }
        })

        return NextResponse.json(deleteCourse)
    } catch (error) {
        console.error("[COURSE_ID_DELETE]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}