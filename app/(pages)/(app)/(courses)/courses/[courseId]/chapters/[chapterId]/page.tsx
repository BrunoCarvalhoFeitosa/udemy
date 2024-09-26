import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { getChapter } from "@/actions/get-chapter"
import { Banner } from "@/app/components/ui/banner"
import { VideoPlayer } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/chapters/[chapterId]/components/video-player"
import { CourseEnrollButton } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/chapters/[chapterId]/components/course-enroll-button"
import { CourseProgressButton } from "@/app/(pages)/(app)/(courses)/courses/[courseId]/chapters/[chapterId]/components/course-progress-button"
import { Preview } from "@/app/components/ui/preview"
import { FileIcon } from "lucide-react"

const ChapterPage = async ({ params }: { params: { courseId: string; chapterId: string }}) => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const {
        chapter,
        course,
        muxData,
        attachments,
        nextChapter,
        userProgress,
        purchase
    } = await getChapter({
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId
    })

    if (!chapter || !course) {
        return redirect("/dashboard")
    }

    const isLocked = !chapter.isFree && !purchase
    const completeOnEnd = !!purchase && !userProgress?.isCompleted
    
    return (
        <div className="pt-20">
            {userProgress?.isCompleted && (
                <Banner
                    variant="success"
                    label="Você completou este capítulo."
                />
            )}
            {isLocked && (
                <Banner
                    variant="warning"
                    label="Você precisa comprar o curso para assistir a este capítulo."
                />
            )}
            <div className="p-6 mx-auto flex flex-col">
                <div className="p-4">
                    <VideoPlayer
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        title={chapter.title}
                        nextChapterId={nextChapter?.id}
                        playbackId={muxData?.playbackId!}
                        isLocked={isLocked}
                        completeOnEnd={completeOnEnd}
                    />
                </div>
                <div>
                    <div className="p-4 flex flex-col md:flex-row justify-between items-center w-full">
                        <div>
                            <h2 className="mb-2 text-lg md:text-2xl font-semibold">
                                {chapter.title}
                            </h2>
                        </div>
                        <div>
                            {purchase ? (
                                <CourseProgressButton
                                    chapterId={params.chapterId}
                                    courseId={params.courseId}
                                    nextChapterId={nextChapter?.id}
                                    isCompleted={!!userProgress?.isCompleted}
                                />
                            ) : (
                                <CourseEnrollButton
                                    courseId={params.courseId}
                                    price={course.price!}
                                />
                            )}
                        </div>
                    </div>
                    <div className="my-4 w-full h-[1px] bg-gray-100" />
                    <div>
                        <Preview value={chapter.description!} />
                    </div>
                    {!!attachments.map((attachment) => (
                        <a
                            key={attachment.id}
                            href={attachment.url}
                            target="_blank"
                            className="flex items-center w-full border bg-gray-100 hover:underline"
                        >
                            <FileIcon />
                            <p className="line-clamp-1">
                                {attachment.name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChapterPage