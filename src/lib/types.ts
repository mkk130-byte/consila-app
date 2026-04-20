// Source/File types
export type FileType = "pdf" | "drawing" | "contract" | "spec" | "email" | "image" | "document"

export interface SourceFile {
  id: string
  name: string
  type: FileType
  size: string
  uploadedAt: string
  selected?: boolean
}

// Issue types
export type IssuePriority = "critical" | "high" | "medium" | "low"
export type IssueStatus = "open" | "in-progress" | "resolved" | "blocked"

export interface Issue {
  id: string
  title: string
  priority: IssuePriority
  status: IssueStatus
  daysOpen: number
  assignee?: string
  source?: string
}

// Activity types
export type ActivityType = "upload" | "analysis" | "comment" | "issue" | "export" | "update"

export interface ActivityItem {
  id: string
  type: ActivityType
  title: string
  description?: string
  timestamp: string
  user?: string
}

// Intelligence/Analysis types
export interface IntelligenceSection {
  id: string
  label: string
  icon: string
  items: string[]
  riskLevel?: "low" | "medium" | "high"
}

export interface IntelligenceOutput {
  id: string
  query: string
  confidence: number
  missingInfo?: string[]
  sections: IntelligenceSection[]
  recommendedActions: RecommendedAction[]
  generatedAt: string
  sourcesUsed: string[]
}

export interface RecommendedAction {
  id: string
  label: string
  priority: "immediate" | "soon" | "monitor"
  type: "rfi" | "notice" | "meeting" | "review" | "document"
}

// Studio/Output types
export type OutputType = "delay-notice" | "status-report" | "design-review" | "rfi" | "change-order"

export interface DraftSection {
  id: string
  title: string
  content: string
  expanded?: boolean
}

export interface SavedOutput {
  id: string
  type: OutputType
  title: string
  createdAt: string
  status: "draft" | "sent" | "approved"
}

// Project types
export type ProjectStatus = "on-track" | "at-risk" | "behind" | "ahead"
export type RiskLevel = "low" | "medium" | "high" | "critical"

export interface Project {
  id: string
  name: string
  client: string
  status: ProjectStatus
  riskLevel: RiskLevel
  progress: number
  lastIssue?: string
  dueDate: string
  sourcesCount: number
  openIssuesCount: number
}

// Panel tab types
export type LeftPanelTab = "sources" | "issues" | "activity"
export type RightPanelTab = "actions" | "saved"
