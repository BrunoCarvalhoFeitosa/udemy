"use client"
import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { ArrowUpDownIcon, MoreHorizontalIcon, SettingsIcon } from "lucide-react"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Course>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0 flex items-center gap-x-2"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Título</span>
                    <ArrowUpDownIcon className="w-4 h-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0 flex items-center gap-x-2"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Preço do curso</span>
                    <ArrowUpDownIcon className="w-4 h-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price") ?? "0")
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(price)

            return <div>
                {formatted}
            </div>
        }
    },
    {
        accessorKey: "isPublished",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0 flex items-center gap-x-2"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Publicação do curso</span>
                    <ArrowUpDownIcon className="w-4 h-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const isPublished = row.getValue("isPublished") ?? false

            return (
                <Badge className={cn(
                    "bg-gray-700",
                    !isPublished && "bg-[#EC5250] hover:bg-[#EC5250]/85"
                )}>
                    {isPublished ? "Publicado" : "Rascunho"}
                </Badge>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { id } = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="p-0 w-8 h-4"
                        >
                            <span className="sr-only">Abrir menú</span>
                            <MoreHorizontalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link href={`/teacher/courses/${id}`}>
                            <DropdownMenuItem className="flex items-center gap-x-2 cursor-pointer">
                                <SettingsIcon className="w-5 h-5" />
                                <span className="font-semibold">
                                    Editar
                                </span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]