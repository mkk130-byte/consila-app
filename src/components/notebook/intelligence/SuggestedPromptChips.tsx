"use client"

interface SuggestedPromptChipsProps {
  prompts: string[]
  onSelect: (prompt: string) => void
}

export function SuggestedPromptChips({ prompts, onSelect }: SuggestedPromptChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3">
      {prompts.map((prompt, i) => (
        <button
          key={i}
          onClick={() => onSelect(prompt)}
          className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground hover:bg-secondary"
        >
          {prompt}
        </button>
      ))}
    </div>
  )
}
