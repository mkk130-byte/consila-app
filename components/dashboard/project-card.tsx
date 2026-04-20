"use client"

import { MoreHorizontal, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  name: string
  description: string
  sourceCount: number
  lastUpdated: string
  status: "active" | "review" | "archived"
}

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-emerald-500/20 text-emerald-400",
  },
  review: {
    label: "In Review",
    className: "bg-amber-500/20 text-amber-400",
  },
  archived: {
    label: "Archived",
    className: "bg-slate-500/20 text-slate-400",
  },
}

export function ProjectCard({
  id,
  name,
  description,
  sourceCount,
  lastUpdated,
  status,
}: ProjectCardProps) {
  const statusInfo = statusConfig[status]

  return (
    <Link
      href={`/notebook?project=${id}`}
      className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-card/80"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${statusInfo.className}`}
            >
              {statusInfo.label}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={(e) => e.preventDefault()}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" />
          <span>{sourceCount} sources</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{lastUpdated}</span>
        </div>
      </div>
    </Link>
  )
}
