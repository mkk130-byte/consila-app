import { FileCheck, MessageSquare, Upload, FileText } from "lucide-react"

interface Activity {
  id: string
  type: "upload" | "chat" | "review" | "report"
  title: string
  project: string
  timestamp: string
}

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "review",
    title: "Generated Design Review for Structural Plans",
    project: "Main Office Building",
    timestamp: "5 minutes ago",
  },
  {
    id: "2",
    type: "chat",
    title: "Analyzed MEP specifications for conflicts",
    project: "Main Office Building",
    timestamp: "1 hour ago",
  },
  {
    id: "3",
    type: "upload",
    title: "Uploaded 3 new specification documents",
    project: "Riverside Apartments",
    timestamp: "2 hours ago",
  },
  {
    id: "4",
    type: "report",
    title: "Generated Progress Report Summary",
    project: "Highway 101 Extension",
    timestamp: "3 hours ago",
  },
  {
    id: "5",
    type: "upload",
    title: "Uploaded contract amendments",
    project: "Downtown Tower",
    timestamp: "5 hours ago",
  },
]

const activityIcons = {
  upload: Upload,
  chat: MessageSquare,
  review: FileCheck,
  report: FileText,
}

const activityColors = {
  upload: "bg-blue-500/20 text-blue-400",
  chat: "bg-emerald-500/20 text-emerald-400",
  review: "bg-amber-500/20 text-amber-400",
  report: "bg-primary/20 text-primary",
}

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border p-4">
        <h2 className="text-sm font-semibold text-foreground">Recent Activity</h2>
      </div>
      <div className="divide-y divide-border">
        {mockActivities.map((activity) => {
          const Icon = activityIcons[activity.type]
          const colorClass = activityColors[activity.type]

          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-4 transition-colors hover:bg-secondary/30"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colorClass}`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground">{activity.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {activity.project} • {activity.timestamp}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
