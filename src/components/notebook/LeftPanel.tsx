"use client"

import { useState } from "react"
import { FolderOpen, AlertCircle, Activity } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { SourcesSection } from "./sources/SourcesSection"
import { OpenIssuesSection } from "./issues/OpenIssuesSection"
import { RecentActivitySection } from "./activity/RecentActivitySection"
import type { SourceFile, Issue, ActivityItem, LeftPanelTab } from "@/src/lib/types"

interface LeftPanelProps {
  sources: SourceFile[]
  issues: Issue[]
  activities: ActivityItem[]
  onSourceToggle?: (id: string) => void
}

const tabs: { id: LeftPanelTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "sources", label: "Sources", icon: FolderOpen },
  { id: "issues", label: "Issues", icon: AlertCircle },
  { id: "activity", label: "Activity", icon: Activity },
]

export function LeftPanel({ sources, issues, activities, onSourceToggle }: LeftPanelProps) {
  const [activeTab, setActiveTab] = useState<LeftPanelTab>("sources")

  const issueCount = issues.filter((i) => i.priority === "critical" || i.priority === "high").length

  return (
    <div className="flex h-full w-[300px] flex-col border-r border-border bg-card">
      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors relative",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            {tab.id === "issues" && issueCount > 0 && (
              <span className="absolute -top-0.5 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {issueCount}
              </span>
            )}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "sources" && (
          <SourcesSection sources={sources} onSourceToggle={onSourceToggle} />
        )}
        {activeTab === "issues" && (
          <OpenIssuesSection issues={issues} />
        )}
        {activeTab === "activity" && (
          <RecentActivitySection activities={activities} />
        )}
      </div>
    </div>
  )
}
