"use client"
import { useEffect, useState } from "react"
import { Chapter } from "@prisma/client"
import { cn } from "@/lib/utils"
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"
import { GridIcon, GripIcon, SettingsIcon } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"


interface ChaptersListProps {
    items: Chapter[]
    onEdit: (id: string) => void
    onReorder: (updatedData: { id: string; position: number }[]) => void
}

export const ChaptersList = ({ items, onEdit, onReorder }: ChaptersListProps) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [chapters, setChapters] = useState(items)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        setChapters(items)
    }, [])

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return

        const items = Array.from(chapters)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        const startIndex = Math.min(result.source.index, result.destination.index)
        const endIndex = Math.max(result.source.index, result.destination.index)
        const updatedChapters = items.slice(startIndex, endIndex + 1)

        setChapters(items)

        const bulkUpdateData = updatedChapters.map((chapter) => ({
            id: chapter.id,
            position: items.findIndex((item) => item.id === chapter.id)
        }))

        onReorder(bulkUpdateData)
    }

    if (!isMounted) {
        return null
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="chapters">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2"
                    >
                        {chapters.map((chapter, index) => (
                            <Draggable
                                key={chapter.id}
                                draggableId={chapter.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        className={cn(
                                            "flex items-center gap-x-2 border bg-gray-200 rounded-md",
                                            chapter.isPublished && "bg-gray-300 text-gray-700"
                                        )}
                                        {...provided.draggableProps}
                                    >
                                        <div
                                            className={cn(
                                                "py-3 px-2 border-r hover:bg-gray-200 rounded-l-md",
                                                chapter.isPublished && "border-r-gray-300"
                                            )}
                                            {...provided.dragHandleProps}
                                        >
                                            <GripIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="line-clamp-1">
                                                {chapter.title}
                                            </p>
                                        </div>
                                        <div className="ml-auto pr-2 flex items-center gap-x-2">
                                            {chapter.isFree && (
                                                <Badge>
                                                    Gratuito
                                                </Badge>
                                            )}
                                            <Badge className={cn(
                                                "bg-gray-700",
                                                !chapter.isPublished && "bg-[#EC5250] hover:bg-[#EC5250]/85"
                                            )}>
                                                {chapter.isPublished ? "Publicado" : "Rascunho"}
                                            </Badge>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                className="p-0"
                                                onClick={() => onEdit(chapter.id)}
                                            >
                                                <SettingsIcon />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}