import { FileText, Clock, CheckCircle } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface OutputMetaStripProps {
  confidence: number
  sourcesUsed: string[]
  generatedAt: string
}

export function OutputMetaStrip({ confidence, sourcesUsed, generatedAt }: OutputMetaStripProps) {
  const confidenceColor = confidence >= 80 
    ? "text-emerald-400" 
    : confidence >= 60 
      ? "text-amber-400" 
      : "text-red-400"

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-y border-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <CheckCircle className={cn("h-3.5 w-3.5", confidenceColor)} />
          <span className={cn("text-xs font-medium", confidenceColor)}>{confidence}% confidence</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <FileText className="h-3.5 w-3.5" />
          <span className="text-xs">{sourcesUsed.length} sources</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        <span className="text-xs">{generatedAt}</span>
      </div>
    </div>
  )
}
