"use client"

import { useState } from "react"
import { Wand2, History } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { QuickActionsBlock } from "./actions/QuickActionsBlock"
import { DraftPreviewSection } from "./actions/DraftPreviewSection"
import { OutputActionBar } from "./actions/OutputActionBar"
import { SavedOutputsList } from "./actions/SavedOutputsList"
import type { DraftSection, SavedOutput, OutputType, RightPanelTab } from "@/src/lib/types"

interface RightPanelProps {
  draftSections: DraftSection[]
  savedOutputs: SavedOutput[]
  onGenerate?: (type: OutputType) => void
}

const tabs: { id: RightPanelTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "actions", label: "Actions", icon: Wand2 },
  { id: "saved", label: "Saved", icon: History },
]

export function RightPanel({ draftSections, savedOutputs, onGenerate }: RightPanelProps) {
  const [activeTab, setActiveTab] = useState<RightPanelTab>("actions")

  return (
    <div className="flex h-full w-[340px] flex-col border-l border-border bg-card">
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
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {activeTab === "actions" ? (
          <>
            <QuickActionsBlock onGenerate={onGenerate} />
            <DraftPreviewSection title="Draft Preview" sections={draftSections} />
            <OutputActionBar />
          </>
        ) : (
          <SavedOutputsList outputs={savedOutputs} />
        )}
      </div>
    </div>
  )
}
