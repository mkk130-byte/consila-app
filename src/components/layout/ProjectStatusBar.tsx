"use client"

import { ChevronDown, AlertTriangle, FileText, Send, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/src/lib/utils"
import { formatStatusLabel, getStatusColor, getRiskColor } from "@/src/lib/utils"
import type { Project } from "@/src/lib/types"

interface ProjectStatusBarProps {
  project: Project
}

export function ProjectStatusBar({ project }: ProjectStatusBarProps) {
  const StatusIcon = project.status === "behind" || project.status === "at-risk" 
    ? TrendingDown 
    : project.status === "ahead" 
      ? TrendingUp 
      : Minus

  return (
    <div className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-card/50 px-4">
      {/* Left: Project selector and status */}
      <div className="flex items-center gap-4">
        {/* Project selector */}
        <button className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-secondary transition-colors">
          <span className="text-sm font-semibold text-foreground">{project.name}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Status badge */}
        <div className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1", getStatusColor(project.status))}>
          <StatusIcon className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{formatStatusLabel(project.status)}</span>
        </div>

        {/* Risk indicator */}
        <div className={cn("flex items-center gap-1.5 rounded-full px-2.5 py-1", getRiskColor(project.riskLevel))}>
          <AlertTriangle className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{formatStatusLabel(project.riskLevel)} Risk</span>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-24 rounded-full bg-secondary overflow-hidden">
            <div 
              className="h-full rounded-full bg-primary transition-all" 
              style={{ width: `${project.progress}%` }} 
            />
          </div>
          <span className="text-xs text-muted-foreground">{project.progress}%</span>
        </div>

        {/* Last issue */}
        {project.lastIssue && (
          <div className="flex items-center gap-2 rounded-md bg-amber-500/10 px-2.5 py-1">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-xs text-amber-400">{project.lastIssue}</span>
          </div>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          <FileText className="h-3.5 w-3.5" />
          Export Report
        </Button>
        <Button size="sm" className="h-8 gap-1.5 text-xs">
          <Send className="h-3.5 w-3.5" />
          Send Update
        </Button>
      </div>
    </div>
  )
}
