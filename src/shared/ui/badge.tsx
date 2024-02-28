import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-2.5 rounded-[0.3125rem] min-w-[4.375rem] justify-center text-[0.75rem] leading-[1.166666] md:text-[1rem] md:leading-5 font-medium leading-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-muted text-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
