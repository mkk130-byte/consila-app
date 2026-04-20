import { AlertTriangle, X } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface AlertCardProps {
  type: "warning" | "info" | "error"
  title: string
  items?: string[]
  onDismiss?: () => void
}

export function AlertCard({ type, title, items, onDismiss }: AlertCardProps) {
  const styles = {
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    info: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    error: "bg-red-500/10 border-red-500/30 text-red-400",
  }

  return (
    <div className={cn("mx-4 mb-3 rounded-lg border p-3", styles[type])}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">{title}</p>
            {items && items.length > 0 && (
              <ul className="mt-1.5 space-y-0.5">
                {items.map((item, i) => (
                  <li key={i} className="text-xs opacity-80">• {item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {onDismiss && (
          <button onClick={onDismiss} className="p-0.5 hover:opacity-70 transition-opacity">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
