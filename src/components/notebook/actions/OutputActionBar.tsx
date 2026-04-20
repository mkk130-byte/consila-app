"use client"

import { Copy, Download, Printer, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OutputActionBarProps {
  onCopy?: () => void
  onDownload?: () => void
  onPrint?: () => void
  onSend?: () => void
}

export function OutputActionBar({ onCopy, onDownload, onPrint, onSend }: OutputActionBarProps) {
  return (
    <div className="flex items-center gap-2 p-4 border-t border-border bg-card/50">
      <Button variant="outline" size="sm" className="flex-1 h-9 gap-1.5 text-xs" onClick={onCopy}>
        <Copy className="h-3.5 w-3.5" />
        Copy
      </Button>
      <Button variant="outline" size="sm" className="flex-1 h-9 gap-1.5 text-xs" onClick={onDownload}>
        <Download className="h-3.5 w-3.5" />
        Download
      </Button>
      <Button variant="outline" size="sm" className="flex-1 h-9 gap-1.5 text-xs" onClick={onPrint}>
        <Printer className="h-3.5 w-3.5" />
        Print
      </Button>
      <Button size="sm" className="flex-1 h-9 gap-1.5 text-xs" onClick={onSend}>
        <Send className="h-3.5 w-3.5" />
        Send
      </Button>
    </div>
  )
}
