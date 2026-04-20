"use client"

import { forwardRef } from "react"
import { cn } from "@/src/lib/utils"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "outline" | "solid"
  size?: "sm" | "md" | "lg"
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "ghost", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            ghost: "hover:bg-secondary hover:text-foreground text-muted-foreground",
            outline: "border border-border hover:bg-secondary hover:text-foreground text-muted-foreground",
            solid: "bg-primary text-primary-foreground hover:bg-primary/90",
          }[variant],
          {
            sm: "h-7 w-7",
            md: "h-8 w-8",
            lg: "h-9 w-9",
          }[size],
          className
        )}
        {...props}
      />
    )
  }
)

IconButton.displayName = "IconButton"
