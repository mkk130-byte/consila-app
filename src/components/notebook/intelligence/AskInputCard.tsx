"use client"

import { useState } from "react"
import { Send, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface AskInputCardProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  placeholder?: string
}

export function AskInputCard({ value, onChange, onSubmit, placeholder }: AskInputCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <div className="mx-4 mb-3 rounded-xl border border-border bg-card p-3">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Ask about your project documents..."}
        className="min-h-[60px] resize-none border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
      />
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
        <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
          <Paperclip className="h-3.5 w-3.5" />
          Attach
        </Button>
        <Button size="sm" className="h-7 gap-1.5 text-xs" onClick={onSubmit} disabled={!value.trim()}>
          <Send className="h-3.5 w-3.5" />
          Analyze
        </Button>
      </div>
    </div>
  )
}
