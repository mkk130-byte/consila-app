"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SectionTitle } from "@/src/components/ui/section-title"
import { Chip } from "@/src/components/ui/chip"
import { IssueCard } from "./IssueCard"
import type { Issue } from "@/src/lib/types"

interface OpenIssuesSectionProps {
  issues: Issue[]
}

const priorityFilters = ["All", "Critical", "High", "Medium", "Low"]

export function OpenIssuesSection({ issues }: OpenIssuesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredIssues = issues.filter((issue) => {
    if (activeFilter === "All") return true
    return issue.priority === activeFilter.toLowerCase()
  })

  const criticalCount = issues.filter((i) => i.priority === "critical").length
  const highCount = issues.filter((i) => i.priority === "high").length

  return (
    <div className="flex flex-col h-full">
      {/* Summary stats */}
      <div className="flex items-center gap-3 px-3 pt-3">
        <div className="flex-1 rounded-lg bg-red-500/10 border border-red-500/20 p-2 text-center">
          <p className="text-lg font-bold text-red-400">{criticalCount}</p>
          <p className="text-[10px] text-red-400/70">Critical</p>
        </div>
        <div className="flex-1 rounded-lg bg-orange-500/10 border border-orange-500/20 p-2 text-center">
          <p className="text-lg font-bold text-orange-400">{highCount}</p>
          <p className="text-[10px] text-orange-400/70">High</p>
        </div>
        <div className="flex-1 rounded-lg bg-secondary border border-border p-2 text-center">
          <p className="text-lg font-bold text-foreground">{issues.length}</p>
          <p className="text-[10px] text-muted-foreground">Total Open</p>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5 px-3 py-3 border-b border-border">
        {priorityFilters.map((filter) => (
          <Chip
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Chip>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <SectionTitle>Issues ({filteredIssues.length})</SectionTitle>
        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-muted-foreground">
          <Plus className="h-3 w-3" />
          Add
        </Button>
      </div>

      {/* Issues list */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 pb-3">
          {filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
