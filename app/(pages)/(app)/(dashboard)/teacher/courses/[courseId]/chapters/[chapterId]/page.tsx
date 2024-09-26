import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import Link from "next/link"
import { Banner } from "@/app/components/ui/banner"
import { FormChapterTitle } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/chapters/[chapterId]/components/form-chapter-title"
import { FormChapterDescription } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/chapters/[chapterId]/components/form-description-form"
import { FormChapterAccess } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/chapters/[chapterId]/components/form-chapter-access"
import { FormChapterVideo } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/chapters/[chapterId]/components/form-chapter-video"
import { ChapterActions } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/chapters/[chapterId]/components/chapter-actions"
import { IconBadge } from "@/app/(pages)/(app)/(dashboard)/components/icon-badge"
import { EyeIcon, LayoutDashboardIcon, MoveLeftIcon, VideoIcon } from "lucide-react"

const ChapterIdPage = async ({ params }: { params: { courseId: string; chapterId: string }}) => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const chapter = await db.chapter.findUnique({
        where: {
            id: params.chapterId,
            courseId: params.courseId
        },
        include: {
            muxData: true
        }
    })

    if (!chapter) {
        return redirect("/dashboard")
    }

    const requiredFields = [
        chapter.title,
        chapter.description,
        chapter.videoUrl
    ]

    const totalFields = requiredFields.length
    const completedFields = requiredFields.filter(Boolean).length
    const completionText = `(${completedFields}/${totalFields})`
    const isComplete = requiredFields.every(Boolean)

    return (
        <div>
            {!chapter.isPublished && (
                <div className="w-full">
                    <Banner
                        variant="warning"
                        label="Este capítulo ainda não foi publicado, ou seja ele não ficará visível aos alunos."
                    />
                </div>
            )}
            <div className="mt-6 mx-auto max-w-5xl xl:max-w-7xl pb-6 px-3 flex flex-col md:justify-center md:items-center h-full">
                <div className="flex justify-between items-center w-full">
                    <div className="w-full">
                        <Link
                            href={`/teacher/courses/${params.courseId}`}
                            className="mb-6 flex items-center gap-2 text-sm hover:opacity-75 transition"
                        >
                            <MoveLeftIcon className="w-6 h-6" />
                            <span>
                                Voltar para as configurações do curso
                            </span>
                        </Link>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-2xl font-semibold text-[#3C3B37]">
                                    Criação de capítulo
                                </h1>
                                <p className="text-gray-500">
                                    Complete todos os campos {completionText}
                                </p>
                            </div>
                            <ChapterActions
                                disabled={!isComplete}
                                courseId={params.courseId}
                                chapterId={params.chapterId}
                                isPublished={chapter.isPublished}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-6">
                        <div className="flex items-center gap-x-2">
                            <div>
                                <IconBadge icon={LayoutDashboardIcon} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-[#3C3B37]">
                                    Customize seu capítulo
                                </h2>
                            </div>
                        </div>
                        <FormChapterTitle
                            initialData={chapter}
                            courseId={params.courseId}
                            chapterId={params.chapterId}
                        />
                        <FormChapterDescription
                            initialData={chapter}
                            courseId={params.courseId}
                            chapterId={params.chapterId}
                        />
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <IconBadge icon={EyeIcon} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#3C3B37]">
                                        Configurações de acesso
                                    </h2>
                                </div>
                            </div>
                            <FormChapterAccess
                                initialData={chapter}
                                courseId={params.courseId}
                                chapterId={params.chapterId}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <IconBadge icon={VideoIcon} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#3C3B37]">
                                        Adicione um vídeo
                                    </h2>
                                </div>
                            </div>
                            <FormChapterVideo
                                initialData={chapter}
                                courseId={params.courseId}
                                chapterId={params.chapterId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterIdPage