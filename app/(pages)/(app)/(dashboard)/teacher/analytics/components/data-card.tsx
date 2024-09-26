"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { formatPrice } from "@/lib/format"

interface DataCardProps {
    value: number
    label: string
    shouldFormat?: boolean
}

export const DataCard = ({ value, label, shouldFormat }: DataCardProps) => {
    return (
        <Card className="rounded-none">
            <CardHeader className="pb-2 flex flex-row justify-between items-center space-y-0">
                <CardTitle className="text-sm font-semibold">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {shouldFormat ? formatPrice(value) : value}
                </div>
            </CardContent>
        </Card>
    )
}