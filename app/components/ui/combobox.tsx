"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/app/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"

interface ComboboxProps {
    options: { label: string; value: string }[]
    value?: string
    onChange?: (value: string) => void
}

export const Combobox = ({ options, value, onChange }: ComboboxProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-12"
                >
                    {value
                        ? options.find((option) => option.value === value)?.label
                        : "Selecione uma opção..."
                    }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Busque por uma categoria..." />
                    <CommandList>
                        <CommandEmpty>
                            Nenhuma opção encontrada.
                        </CommandEmpty>
                        <CommandGroup>
                            {options && options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        if (onChange) {
                                            onChange(option?.value === value ? "" : option.value)
                                            setOpen(false)
                                        }
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}