"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { OutputMetaStrip } from "./OutputMetaStrip"
import { IntelligenceSection } from "./IntelligenceSection"
import { RecommendedActions } from "./RecommendedActions"
import { AlertCard } from "./AlertCard"
import type { IntelligenceOutput, RecommendedAction } from "@/src/lib/types"

interface IntelligenceOutputCardProps {
  output: IntelligenceOutput
  onAction?: (action: RecommendedAction) => void
}

export function IntelligenceOutputCard({ output, onAction }: IntelligenceOutputCardProps) {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Query display */}
      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs text-muted-foreground mb-1">Your question:</p>
        <p className="text-sm text-foreground">{output.query}</p>
      </div>

      {/* Meta strip */}
      <OutputMetaStrip
        confidence={output.confidence}
        sourcesUsed={output.sourcesUsed}
        generatedAt={output.generatedAt}
      />

      {/* Missing info alert */}
      {output.missingInfo && output.missingInfo.length > 0 && (
        <AlertCard
          type="warning"
          title="Additional documents may improve analysis"
          items={output.missingInfo}
        />
      )}

      {/* Sections */}
      <ScrollArea className="flex-1">
        <div>
          {output.sections.map((section) => (
            <IntelligenceSection key={section.id} section={section} />
          ))}
        </div>
      </ScrollArea>

      {/* Recommended actions */}
      <RecommendedActions actions={output.recommendedActions} onAction={onAction} />
    </div>
  )
}
