"use client"
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const progressVariants = cva(
    "w-full h-full flex-1 bg-primary transition-all",
    {
        variants: {
            variant: {
                default: "bg-[#EE6361]",
                success: "bg-emerald-700"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface ProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {}


type CombinedProgressProps = ProgressProps & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>

const Progress = forwardRef<
    ElementRef<typeof ProgressPrimitive.Root>,
    CombinedProgressProps
>(({ className, value, variant, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn(progressVariants({ variant }))}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }