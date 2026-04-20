import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileTypeColor(type: string): string {
  const colors: Record<string, string> = {
    pdf: "bg-red-500/20 text-red-400 border-red-500/30",
    drawing: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    contract: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    spec: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    email: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    image: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    document: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  }
  return colors[type] || colors.document
}

export function getFileTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    pdf: "PDF",
    drawing: "Drawing",
    contract: "Contract",
    spec: "Spec",
    email: "Email",
    image: "Image",
    document: "Doc",
  }
  return labels[type] || "File"
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: "bg-red-500/20 text-red-400 border-red-500/30",
    high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    low: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  }
  return colors[priority] || colors.low
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    "on-track": "bg-emerald-500/20 text-emerald-400",
    "at-risk": "bg-amber-500/20 text-amber-400",
    behind: "bg-red-500/20 text-red-400",
    ahead: "bg-blue-500/20 text-blue-400",
    open: "bg-blue-500/20 text-blue-400",
    "in-progress": "bg-amber-500/20 text-amber-400",
    resolved: "bg-emerald-500/20 text-emerald-400",
    blocked: "bg-red-500/20 text-red-400",
    draft: "bg-slate-500/20 text-slate-400",
    sent: "bg-blue-500/20 text-blue-400",
    approved: "bg-emerald-500/20 text-emerald-400",
  }
  return colors[status] || colors.draft
}

export function getRiskColor(level: string): string {
  const colors: Record<string, string> = {
    low: "bg-emerald-500/20 text-emerald-400",
    medium: "bg-amber-500/20 text-amber-400",
    high: "bg-orange-500/20 text-orange-400",
    critical: "bg-red-500/20 text-red-400",
  }
  return colors[level] || colors.low
}

export function getActivityIcon(type: string): string {
  const icons: Record<string, string> = {
    upload: "upload",
    analysis: "sparkles",
    comment: "message-square",
    issue: "alert-circle",
    export: "download",
    update: "refresh-cw",
  }
  return icons[type] || "circle"
}

export function formatStatusLabel(status: string): string {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
