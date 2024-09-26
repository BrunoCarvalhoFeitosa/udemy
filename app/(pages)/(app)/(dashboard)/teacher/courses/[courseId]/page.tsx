import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { IconBadge } from "@/app/(pages)/(app)/(dashboard)/components/icon-badge"
import { FormTitle } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-title"
import { FormDescription } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-description"
import { FormImage } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-image"
import { FormCategory } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-category"
import { FormChapters } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-chapters"
import { FormPrice } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-price"
import { FormAttachment } from "@/app/(pages)/(app)/(dashboard)/teacher/courses/[courseId]/components/form-attachment"
import { CircleDollarSignIcon, FileIcon, LayoutDashboardIcon, ListChecks } from "lucide-react"
import { Banner } from "@/app/components/ui/banner"
import { Actions } from "./components/actions"

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
    const { userId } = auth()

    if (!userId) {
        redirect("/dashboard")
    }

    const course = await db.course.findUnique({
        where: {
            userId,
            id: params.courseId
        },
        include: {
            chapters: {
                orderBy: {
                    position: "asc"
                }
            },
            attachments: {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    })

    if (!course) {
        redirect("/dashboard")
    }

    const requiredFields = [
        course.title,
        course.description,
        course.imageUrl,
        course.price,
        course.categoryId,
        course.chapters.some(chapter => chapter.isPublished)
    ]

    const totalFields = requiredFields.length
    const completedFields = requiredFields.filter(Boolean).length
    const completionText = `(${completedFields}/${totalFields})`
    const isComplete = requiredFields.every(Boolean)

    return (
        <div>
            {!course.isPublished && (
                <div className="w-full">
                    <Banner
                        label="Este curso ainda não foi publicado, ou seja ele não ficará visível aos alunos."
                    />
                </div>
            )}
            <div className="mt-6 mx-auto max-w-5xl xl:max-w-7xl pb-6 px-3 flex flex-col md:justify-center md:items-center h-full">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-semibold text-[#3C3B37]">
                            Configurações do curso
                        </h1>
                        <p className="text-gray-500">
                            Complete todos os campos {completionText}
                        </p>
                    </div>
                    <div>
                        <Actions
                            disabled={!isComplete}
                            courseId={params.courseId}
                            isPublished={course.isPublished}
                        />
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <div>
                                <IconBadge icon={LayoutDashboardIcon} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-[#3C3B37]">
                                    Customize seu curso
                                </h2>
                            </div>
                        </div>
                        <FormTitle
                            initialData={course}
                            courseId={course.id}
                        />
                        <FormDescription
                            initialData={course}
                            courseId={course.id}
                        />
                        <FormImage
                            initialData={course}
                            courseId={course.id}
                        />
                        <FormCategory
                            initialData={course}
                            courseId={course.id}
                            options={categories.map((category) => ({
                                label: category.name,
                                value: category.id
                            }))}
                        />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <IconBadge icon={ListChecks} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#3C3B37]">
                                        Capítulos do curso
                                    </h2>
                                </div>
                            </div>
                            <FormChapters
                                initialData={course}
                                courseId={course.id}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <IconBadge icon={CircleDollarSignIcon} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#3C3B37]">
                                        Venda seu curso
                                    </h2>
                                </div>
                            </div>
                            <FormPrice
                                initialData={course}
                                courseId={course.id}
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <div>
                                    <IconBadge icon={FileIcon} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#3C3B37]">
                                        Recursos e anexos
                                    </h2>
                                </div>
                            </div>
                            <FormAttachment
                                initialData={course}
                                courseId={course.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseIdPage