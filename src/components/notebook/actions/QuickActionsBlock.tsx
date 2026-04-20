"use client"

import { useState } from "react"
import { Clock, FileText, Search, FileQuestion, Receipt } from "lucide-react"
import { SectionTitle } from "@/src/components/ui/section-title"
import { ActionTile } from "./ActionTile"
import type { OutputType } from "@/src/lib/types"

interface QuickActionsBlockProps {
  onGenerate?: (type: OutputType) => void
}

const actions: { type: OutputType; icon: React.ReactNode; label: string; description: string }[] = [
  { type: "delay-notice", icon: <Clock className="h-5 w-5" />, label: "Delay Notice", description: "Formal delay notification" },
  { type: "status-report", icon: <FileText className="h-5 w-5" />, label: "Status Report", description: "Weekly progress update" },
  { type: "design-review", icon: <Search className="h-5 w-5" />, label: "Design Review", description: "Technical analysis" },
  { type: "rfi", icon: <FileQuestion className="h-5 w-5" />, label: "RFI", description: "Request for information" },
  { type: "change-order", icon: <Receipt className="h-5 w-5" />, label: "Change Order", description: "Scope change request" },
]

export function QuickActionsBlock({ onGenerate }: QuickActionsBlockProps) {
  const [activeType, setActiveType] = useState<OutputType>("delay-notice")

  return (
    <div className="p-4">
      <SectionTitle className="mb-3">Generate Document</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <ActionTile
            key={action.type}
            icon={action.icon}
            label={action.label}
            description={action.description}
            active={activeType === action.type}
            onClick={() => {
              setActiveType(action.type)
              onGenerate?.(action.type)
            }}
          />
        ))}
      </div>
    </div>
  )
}
