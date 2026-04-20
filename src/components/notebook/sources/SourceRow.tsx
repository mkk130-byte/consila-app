"use client"

import { FileText, MoreHorizontal, Check } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/src/lib/utils"
import { getFileTypeColor, getFileTypeLabel } from "@/src/lib/utils"
import type { SourceFile } from "@/src/lib/types"

interface SourceRowProps {
  source: SourceFile
  onToggle?: (id: string) => void
}

export function SourceRow({ source, onToggle }: SourceRowProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all cursor-pointer",
        source.selected
          ? "border-primary/50 bg-primary/5"
          : "border-transparent hover:border-border hover:bg-secondary/50"
      )}
      onClick={() => onToggle?.(source.id)}
    >
      <Checkbox
        checked={source.selected}
        onCheckedChange={() => onToggle?.(source.id)}
        className="h-4 w-4"
      />

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary">
        <FileText className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{source.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium border", getFileTypeColor(source.type))}>
            {getFileTypeLabel(source.type)}
          </span>
          <span className="text-[10px] text-muted-foreground">{source.size}</span>
          <span className="text-[10px] text-muted-foreground">• {source.uploadedAt}</span>
        </div>
      </div>

      <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-secondary transition-opacity">
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  )
}
