import { cn } from "@/src/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export function SectionTitle({ children, className, action }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {children}
      </h3>
      {action}
    </div>
  )
}
