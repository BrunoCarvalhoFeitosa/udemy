import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Categories } from "@/app/(pages)/(app)/(dashboard)/search/components/categories"
import { getCourses } from "@/actions/get-courses"
import { SearchInput } from "@/app/components/ui/search-input"
import { CoursesList } from "@/app/components/common/courses-list"

interface SearchPageProps {
    searchParams: {
        title: string
        categoryId: string
    }
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    })

    const courses = await getCourses({
        userId,
        ...searchParams
    })

    return (
        <div>
            <div className="pt-6 px-6 block md:hidden md:mb-0">
                <SearchInput />
            </div>
            <div className="p-6">
                <Categories items={categories} />
                <CoursesList items={courses} />
            </div>
        </div>
    )
}

export default SearchPage