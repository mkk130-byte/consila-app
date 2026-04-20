"use client"

import { useState } from "react"
import { Wrench, Clock, Scale, DollarSign, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { getRiskColor } from "@/src/lib/utils"
import type { IntelligenceSection as IntelligenceSectionType } from "@/src/lib/types"

interface IntelligenceSectionProps {
  section: IntelligenceSectionType
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  clock: Clock,
  scale: Scale,
  dollar: DollarSign,
  alert: AlertTriangle,
}

export function IntelligenceSection({ section }: IntelligenceSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const Icon = iconMap[section.icon] || Wrench

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center gap-3 px-4 py-3 hover:bg-secondary/30 transition-colors"
      >
        <div className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
          section.riskLevel ? getRiskColor(section.riskLevel) : "bg-secondary"
        )}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="flex-1 text-left text-sm font-medium text-foreground">{section.label}</span>
        {section.riskLevel && (
          <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium", getRiskColor(section.riskLevel))}>
            {section.riskLevel.toUpperCase()}
          </span>
        )}
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      
      {isExpanded && (
        <ul className="px-4 pb-3 pl-14 space-y-1.5">
          {section.items.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              • {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
