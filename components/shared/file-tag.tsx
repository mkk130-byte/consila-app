import { cn } from "@/lib/utils"

type FileType = "pdf" | "drawing" | "contract" | "spec" | "image" | "document" | "email"

const fileTypeConfig: Record<FileType, { label: string; className: string }> = {
  pdf: {
    label: "PDF",
    className: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  drawing: {
    label: "Drawing",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  contract: {
    label: "Contract",
    className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  spec: {
    label: "Spec",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  image: {
    label: "Image",
    className: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  },
  document: {
    label: "Doc",
    className: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  },
  email: {
    label: "Email",
    className: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
}

interface FileTagProps {
  type: FileType
  className?: string
}

export function FileTag({ type, className }: FileTagProps) {
  const config = fileTypeConfig[type]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  )
}

export type { FileType }
