import { Upload, Sparkles, MessageSquare, AlertCircle, Download, RefreshCw } from "lucide-react"
import { cn } from "@/src/lib/utils"
import type { ActivityItem as ActivityItemType } from "@/src/lib/types"

interface ActivityItemProps {
  activity: ActivityItemType
}

const iconMap = {
  upload: Upload,
  analysis: Sparkles,
  comment: MessageSquare,
  issue: AlertCircle,
  export: Download,
  update: RefreshCw,
}

const colorMap = {
  upload: "bg-blue-500/20 text-blue-400",
  analysis: "bg-primary/20 text-primary",
  comment: "bg-slate-500/20 text-slate-400",
  issue: "bg-amber-500/20 text-amber-400",
  export: "bg-emerald-500/20 text-emerald-400",
  update: "bg-cyan-500/20 text-cyan-400",
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const Icon = iconMap[activity.type] || Upload

  return (
    <div className="flex gap-3 py-2.5">
      <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full", colorMap[activity.type])}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{activity.title}</p>
        {activity.description && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{activity.description}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          {activity.user && (
            <span className="text-[10px] text-muted-foreground">{activity.user}</span>
          )}
          <span className="text-[10px] text-muted-foreground">• {activity.timestamp}</span>
        </div>
      </div>
    </div>
  )
}
