import { ScrollArea } from "@/components/ui/scroll-area"
import { SectionTitle } from "@/src/components/ui/section-title"
import { SavedOutputRow } from "./SavedOutputRow"
import type { SavedOutput } from "@/src/lib/types"

interface SavedOutputsListProps {
  outputs: SavedOutput[]
  onSelect?: (output: SavedOutput) => void
}

export function SavedOutputsList({ outputs, onSelect }: SavedOutputsListProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-border">
        <SectionTitle>Saved Outputs ({outputs.length})</SectionTitle>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 py-2">
          {outputs.map((output) => (
            <SavedOutputRow
              key={output.id}
              output={output}
              onClick={() => onSelect?.(output)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
