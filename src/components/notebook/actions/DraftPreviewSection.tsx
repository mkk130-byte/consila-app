"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Edit3 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SectionTitle } from "@/src/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { cn } from "@/src/lib/utils"
import type { DraftSection } from "@/src/lib/types"

interface DraftPreviewSectionProps {
  title: string
  sections: DraftSection[]
}

export function DraftPreviewSection({ title, sections }: DraftPreviewSectionProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.filter((s) => s.expanded).map((s) => s.id))
  )

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 border-t border-border">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <SectionTitle>{title}</SectionTitle>
        <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
          <Edit3 className="h-3 w-3" />
          Edit
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-border">
          {sections.map((section) => {
            const isExpanded = expandedSections.has(section.id)
            return (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center gap-2 px-4 py-2.5 hover:bg-secondary/30 transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium text-foreground">{section.title}</span>
                </button>
                {isExpanded && (
                  <div className="px-4 pb-3 pl-10">
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{section.content}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
