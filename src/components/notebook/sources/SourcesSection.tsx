"use client"

import { useState } from "react"
import { Upload, FolderOpen, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SectionTitle } from "@/src/components/ui/section-title"
import { Chip } from "@/src/components/ui/chip"
import { SourceRow } from "./SourceRow"
import type { SourceFile } from "@/src/lib/types"

interface SourcesSectionProps {
  sources: SourceFile[]
  onSourceToggle?: (id: string) => void
}

const filterOptions = ["All", "Drawings", "Specs", "Contracts", "Emails"]

export function SourcesSection({ sources, onSourceToggle }: SourcesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isDragOver, setIsDragOver] = useState(false)

  const selectedCount = sources.filter((s) => s.selected).length

  const filteredSources = sources.filter((source) => {
    if (activeFilter === "All") return true
    const typeMap: Record<string, string[]> = {
      Drawings: ["drawing"],
      Specs: ["spec"],
      Contracts: ["contract"],
      Emails: ["email"],
    }
    return typeMap[activeFilter]?.includes(source.type)
  })

  return (
    <div className="flex flex-col h-full">
      {/* Upload area */}
      <div
        className={`mx-3 mt-3 rounded-lg border-2 border-dashed transition-colors ${
          isDragOver
            ? "border-primary bg-primary/10"
            : "border-border hover:border-primary/50"
        }`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={() => setIsDragOver(false)}
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <Upload className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">Drop files here</p>
            <p className="text-xs text-muted-foreground">or click to browse</p>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5 px-3 py-3 border-b border-border">
        {filterOptions.map((filter) => (
          <Chip
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Chip>
        ))}
      </div>

      {/* Sources list header */}
      <div className="flex items-center justify-between px-3 py-2">
        <SectionTitle>
          Sources ({filteredSources.length})
        </SectionTitle>
        {selectedCount > 0 && (
          <span className="text-xs text-primary font-medium">
            {selectedCount} selected
          </span>
        )}
      </div>

      {/* Sources list */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 pb-3">
          {filteredSources.map((source) => (
            <SourceRow
              key={source.id}
              source={source}
              onToggle={onSourceToggle}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
