import { Clock, FileText, Search, FileQuestion, Receipt, MoreHorizontal } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { getStatusColor, formatStatusLabel } from "@/src/lib/utils"
import type { SavedOutput } from "@/src/lib/types"

interface SavedOutputRowProps {
  output: SavedOutput
  onClick?: () => void
}

const typeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "delay-notice": Clock,
  "status-report": FileText,
  "design-review": Search,
  "rfi": FileQuestion,
  "change-order": Receipt,
}

export function SavedOutputRow({ output, onClick }: SavedOutputRowProps) {
  const Icon = typeIconMap[output.type] || FileText

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left transition-all hover:border-border hover:bg-secondary/50"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{output.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium", getStatusColor(output.status))}>
            {formatStatusLabel(output.status)}
          </span>
          <span className="text-[10px] text-muted-foreground">{output.createdAt}</span>
        </div>
      </div>
      <MoreHorizontal className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
    </button>
  )
}
