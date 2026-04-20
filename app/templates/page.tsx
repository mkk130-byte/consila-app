"use client"

import { useState } from "react"
import {
  FileCheck,
  AlertCircle,
  FileText,
  ClipboardList,
  Scale,
  HardHat,
  Search,
} from "lucide-react"
import { AppShell } from "@/src/components/layout/AppShell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/src/lib/utils"

const templates = [
  {
    id: "design-review",
    name: "Design Review",
    description:
      "Comprehensive analysis of design documents for code compliance, constructability, and coordination issues.",
    icon: FileCheck,
    category: "Review",
    uses: 234,
  },
  {
    id: "delay-notice",
    name: "Delay Notice",
    description:
      "Formal notification draft for schedule delays with supporting documentation and impact analysis.",
    icon: AlertCircle,
    category: "Notice",
    uses: 156,
  },
  {
    id: "progress-report",
    name: "Progress Report",
    description:
      "Weekly or monthly progress summary with milestone tracking and issue identification.",
    icon: FileText,
    category: "Report",
    uses: 312,
  },
  {
    id: "rfi-response",
    name: "RFI Response",
    description:
      "Request for Information response template with supporting references and recommendations.",
    icon: ClipboardList,
    category: "Communication",
    uses: 189,
  },
  {
    id: "change-order",
    name: "Change Order Analysis",
    description:
      "Cost and schedule impact analysis for proposed changes with supporting documentation.",
    icon: Scale,
    category: "Cost",
    uses: 145,
  },
  {
    id: "safety-report",
    name: "Safety Compliance Report",
    description:
      "OSHA compliance review and safety observation documentation for job site conditions.",
    icon: HardHat,
    category: "Safety",
    uses: 98,
  },
]

const categories = ["All", "Review", "Report", "Notice", "Communication", "Cost", "Safety"]

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = activeCategory === "All" || template.category === activeCategory
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <AppShell>
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Templates</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Pre-built output templates for common construction workflows
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                className="pl-9 bg-card border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <template.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">
                        {template.name}
                      </h3>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {template.category}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {template.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Used {template.uses} times
                  </span>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Use Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
