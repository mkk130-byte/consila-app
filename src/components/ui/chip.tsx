import { cn } from "@/src/lib/utils"

interface ChipProps {
  children: React.ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
}

export function Chip({ children, className, active, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
        active
          ? "bg-primary/20 text-primary"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        className
      )}
    >
      {children}
    </button>
  )
}
