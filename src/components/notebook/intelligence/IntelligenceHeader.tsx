import { Sparkles } from "lucide-react"

export function IntelligenceHeader() {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20">
        <Sparkles className="h-4 w-4 text-primary" />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-foreground">Project Intelligence</h2>
        <p className="text-[10px] text-muted-foreground">Ask questions about your project documents</p>
      </div>
    </div>
  )
}
