import { cn } from "@/src/lib/utils"

interface WorkspaceGridProps {
  children: React.ReactNode
  className?: string
}

export function WorkspaceGrid({ children, className }: WorkspaceGridProps) {
  return (
    <div className={cn("flex flex-1 overflow-hidden", className)}>
      {children}
    </div>
  )
}
