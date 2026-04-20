"use client"

import { ArrowRight, FileQuestion, AlertOctagon, Users, Search, FileText } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { SectionTitle } from "@/src/components/ui/section-title"
import type { RecommendedAction } from "@/src/lib/types"

interface RecommendedActionsProps {
  actions: RecommendedAction[]
  onAction?: (action: RecommendedAction) => void
}

const typeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rfi: FileQuestion,
  notice: AlertOctagon,
  meeting: Users,
  review: Search,
  document: FileText,
}

const priorityStyles = {
  immediate: "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30",
  soon: "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30",
  monitor: "bg-slate-500/20 text-slate-400 border-slate-500/30 hover:bg-slate-500/30",
}

export function RecommendedActions({ actions, onAction }: RecommendedActionsProps) {
  return (
    <div className="px-4 py-3 border-t border-border">
      <SectionTitle className="mb-3">Recommended Actions</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => {
          const Icon = typeIconMap[action.type] || FileText
          return (
            <button
              key={action.id}
              onClick={() => onAction?.(action)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                priorityStyles[action.priority]
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {action.label}
              <ArrowRight className="h-3 w-3 opacity-50" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
