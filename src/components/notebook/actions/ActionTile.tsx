"use client"

import { cn } from "@/src/lib/utils"

interface ActionTileProps {
  icon: React.ReactNode
  label: string
  description?: string
  active?: boolean
  onClick?: () => void
}

export function ActionTile({ icon, label, description, active, onClick }: ActionTileProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50 text-foreground"
      )}
    >
      <div className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg",
        active ? "bg-primary/20" : "bg-secondary"
      )}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description && (
          <p className="text-[10px] text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
    </button>
  )
}
