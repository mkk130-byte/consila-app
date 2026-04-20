"use client"

import { useState } from "react"
import { AppShell } from "@/src/components/layout/AppShell"
import { ProjectStatusBar } from "@/src/components/layout/ProjectStatusBar"
import { WorkspaceGrid } from "@/src/components/layout/WorkspaceGrid"
import { LeftPanel } from "@/src/components/notebook/LeftPanel"
import { CenterPanel } from "@/src/components/notebook/CenterPanel"
import { RightPanel } from "@/src/components/notebook/RightPanel"
import {
  mockProject,
  mockSources,
  mockIssues,
  mockActivities,
  mockIntelligenceOutput,
  mockDraftSections,
  mockSavedOutputs,
  suggestedPrompts,
} from "@/src/lib/mock-data"
import type { SourceFile } from "@/src/lib/types"

export default function NotebookPage() {
  const [sources, setSources] = useState<SourceFile[]>(mockSources)
  const [hasOutput, setHasOutput] = useState(true)

  const handleSourceToggle = (id: string) => {
    setSources((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    )
  }

  const handleSubmit = (query: string) => {
    console.log("Query submitted:", query)
    setHasOutput(true)
  }

  return (
    <AppShell>
      <ProjectStatusBar project={mockProject} />
      <WorkspaceGrid>
        <LeftPanel
          sources={sources}
          issues={mockIssues}
          activities={mockActivities}
          onSourceToggle={handleSourceToggle}
        />
        <CenterPanel
          suggestedPrompts={suggestedPrompts}
          output={hasOutput ? mockIntelligenceOutput : undefined}
          onSubmit={handleSubmit}
        />
        <RightPanel
          draftSections={mockDraftSections}
          savedOutputs={mockSavedOutputs}
        />
      </WorkspaceGrid>
    </AppShell>
  )
}
