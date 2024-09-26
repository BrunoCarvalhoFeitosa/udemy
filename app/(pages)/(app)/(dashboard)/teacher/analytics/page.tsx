import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getAnalytics } from "@/actions/get-analytics"
import { DataCard } from "@/app/(pages)/(app)/(dashboard)/teacher/analytics/components/data-card"
import { Chart } from "@/app/(pages)/(app)/(dashboard)/teacher/analytics/components/chart"

const AnalyticsPage = async () => {
    const { userId } = auth()

    if (!userId) {
        return redirect("/dashboard")
    }

    const { data, totalRevenue, totalSales } = await getAnalytics(userId)

    return (
        <div className="p-6">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <DataCard
                    label="Total em receita"
                    value={totalRevenue}
                    shouldFormat
                />
                <DataCard
                    label="Número de vendas"
                    value={totalSales}
                />
            </div>
            <Chart data={data} />
        </div>
    )
}

export default AnalyticsPage