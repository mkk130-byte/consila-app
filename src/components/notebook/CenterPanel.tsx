"use client"

import { useState } from "react"
import { IntelligenceHeader } from "./intelligence/IntelligenceHeader"
import { SuggestedPromptChips } from "./intelligence/SuggestedPromptChips"
import { AskInputCard } from "./intelligence/AskInputCard"
import { IntelligenceOutputCard } from "./intelligence/IntelligenceOutputCard"
import type { IntelligenceOutput, RecommendedAction } from "@/src/lib/types"

interface CenterPanelProps {
  suggestedPrompts: string[]
  output?: IntelligenceOutput
  onSubmit?: (query: string) => void
  onAction?: (action: RecommendedAction) => void
}

export function CenterPanel({ suggestedPrompts, output, onSubmit, onAction }: CenterPanelProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit?.(inputValue)
      setInputValue("")
    }
  }

  const handlePromptSelect = (prompt: string) => {
    setInputValue(prompt)
  }

  return (
    <div className="flex flex-1 flex-col min-w-0 bg-background">
      <IntelligenceHeader />
      
      {!output ? (
        <>
          <SuggestedPromptChips prompts={suggestedPrompts} onSelect={handlePromptSelect} />
          <div className="flex-1" />
          <AskInputCard
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
          />
        </>
      ) : (
        <>
          <IntelligenceOutputCard output={output} onAction={onAction} />
          <AskInputCard
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
            placeholder="Ask a follow-up question..."
          />
        </>
      )}
    </div>
  )
}
