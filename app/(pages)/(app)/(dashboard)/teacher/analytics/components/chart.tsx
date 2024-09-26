"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card } from "@/app/components/ui/card"

interface ChartProps {
    data: {
        name: string
        total: number
    }[]
}

export const Chart = ({ data }: ChartProps) => {
    return (
        <Card className="py-8">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        tickFormatter={(value) => `${value}`}
                        axisLine={false}
                    />
                    <Bar
                        dataKey="total"
                        fill="#0369A1"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}