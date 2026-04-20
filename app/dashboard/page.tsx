"use client"

import Link from "next/link"
import { Plus, FolderOpen, AlertCircle, FileText, TrendingUp, Clock } from "lucide-react"
import { AppShell } from "@/src/components/layout/AppShell"
import { Button } from "@/components/ui/button"
import { cn } from "@/src/lib/utils"
import { getStatusColor, getRiskColor, formatStatusLabel } from "@/src/lib/utils"

const projects = [
  {
    id: "proj-001",
    name: "Riverside Commercial Tower",
    client: "Meridian Development Group",
    status: "at-risk",
    riskLevel: "high",
    progress: 42,
    sources: 47,
    issues: 12,
    lastActivity: "10 minutes ago",
  },
  {
    id: "proj-002",
    name: "Harbor View Residential",
    client: "Coastal Properties LLC",
    status: "on-track",
    riskLevel: "low",
    progress: 68,
    sources: 32,
    issues: 3,
    lastActivity: "2 hours ago",
  },
  {
    id: "proj-003",
    name: "Downtown Mixed-Use",
    client: "Urban Renewal Partners",
    status: "behind",
    riskLevel: "critical",
    progress: 25,
    sources: 58,
    issues: 18,
    lastActivity: "Yesterday",
  },
]

const stats = [
  { label: "Active Projects", value: "12", icon: FolderOpen, trend: "+2 this month" },
  { label: "Open Issues", value: "47", icon: AlertCircle, trend: "8 critical" },
  { label: "Documents", value: "384", icon: FileText, trend: "+24 this week" },
  { label: "Analyses", value: "156", icon: TrendingUp, trend: "12 pending" },
]

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Overview of your construction projects and intelligence
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Projects</h2>
            <div className="grid grid-cols-3 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/notebook/${project.id}`}
                  className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.client}</p>
                    </div>
                    <div className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", getStatusColor(project.status))}>
                      {formatStatusLabel(project.status)}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <FileText className="h-3.5 w-3.5" />
                      <span className="text-xs">{project.sources}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span className="text-xs">{project.issues} issues</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground ml-auto">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs">{project.lastActivity}</span>
                    </div>
                  </div>

                  {/* Risk indicator */}
                  <div className={cn("mt-3 rounded-lg px-2.5 py-1.5 text-xs", getRiskColor(project.riskLevel))}>
                    {formatStatusLabel(project.riskLevel)} Risk
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
