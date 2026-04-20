import { AlertCircle, Clock, User, FileText } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { getPriorityColor, getStatusColor, formatStatusLabel } from "@/src/lib/utils"
import type { Issue } from "@/src/lib/types"

interface IssueCardProps {
  issue: Issue
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-3 hover:border-primary/30 transition-colors cursor-pointer">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <AlertCircle className={cn("h-4 w-4 shrink-0 mt-0.5", 
            issue.priority === "critical" ? "text-red-400" :
            issue.priority === "high" ? "text-orange-400" :
            issue.priority === "medium" ? "text-amber-400" : "text-slate-400"
          )} />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground line-clamp-2">{issue.title}</p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium border", getPriorityColor(issue.priority))}>
                {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
              </span>
              <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium", getStatusColor(issue.status))}>
                {formatStatusLabel(issue.status)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0 text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span className="text-[10px]">{issue.daysOpen}d</span>
        </div>
      </div>

      {(issue.assignee || issue.source) && (
        <div className="flex items-center gap-3 mt-2 pt-2 border-t border-border">
          {issue.assignee && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <User className="h-3 w-3" />
              <span className="text-[10px]">{issue.assignee}</span>
            </div>
          )}
          {issue.source && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <FileText className="h-3 w-3" />
              <span className="text-[10px] truncate max-w-[120px]">{issue.source}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
