import type {
  SourceFile,
  Issue,
  ActivityItem,
  IntelligenceOutput,
  SavedOutput,
  Project,
  DraftSection,
} from "./types"

export const mockProject: Project = {
  id: "proj-001",
  name: "Riverside Commercial Tower",
  client: "Meridian Development Group",
  status: "at-risk",
  riskLevel: "high",
  progress: 42,
  lastIssue: "Foundation revision delay - 18 days impact",
  dueDate: "2024-09-15",
  sourcesCount: 47,
  openIssuesCount: 12,
}

export const mockSources: SourceFile[] = [
  {
    id: "src-1",
    name: "Structural_Plans_Rev3.pdf",
    type: "drawing",
    size: "12.4 MB",
    uploadedAt: "2 hours ago",
    selected: true,
  },
  {
    id: "src-2",
    name: "General_Conditions_Contract.pdf",
    type: "contract",
    size: "2.1 MB",
    uploadedAt: "1 day ago",
    selected: true,
  },
  {
    id: "src-3",
    name: "MEP_Specifications_v2.pdf",
    type: "spec",
    size: "8.7 MB",
    uploadedAt: "3 days ago",
    selected: false,
  },
  {
    id: "src-4",
    name: "RE_Foundation_Revision_Request.eml",
    type: "email",
    size: "145 KB",
    uploadedAt: "4 days ago",
    selected: true,
  },
  {
    id: "src-5",
    name: "Foundation_Details_Rev2.dwg",
    type: "drawing",
    size: "15.8 MB",
    uploadedAt: "1 week ago",
    selected: false,
  },
  {
    id: "src-6",
    name: "Subcontractor_Delay_Notice.eml",
    type: "email",
    size: "89 KB",
    uploadedAt: "1 week ago",
    selected: true,
  },
  {
    id: "src-7",
    name: "Material_Submittal_001.pdf",
    type: "spec",
    size: "1.3 MB",
    uploadedAt: "2 weeks ago",
    selected: false,
  },
]

export const mockIssues: Issue[] = [
  {
    id: "iss-1",
    title: "Foundation design revision required",
    priority: "critical",
    status: "open",
    daysOpen: 12,
    assignee: "John Smith",
    source: "Structural_Plans_Rev3.pdf",
  },
  {
    id: "iss-2",
    title: "Steel delivery delay - supplier constraint",
    priority: "high",
    status: "in-progress",
    daysOpen: 8,
    assignee: "Sarah Chen",
  },
  {
    id: "iss-3",
    title: "MEP coordination conflict at Level 3",
    priority: "high",
    status: "open",
    daysOpen: 5,
    assignee: "Mike Johnson",
    source: "MEP_Specifications_v2.pdf",
  },
  {
    id: "iss-4",
    title: "Missing waterproofing details",
    priority: "medium",
    status: "open",
    daysOpen: 3,
  },
  {
    id: "iss-5",
    title: "Concrete pour sequence review",
    priority: "low",
    status: "open",
    daysOpen: 2,
  },
]

export const mockActivities: ActivityItem[] = [
  {
    id: "act-1",
    type: "analysis",
    title: "Foundation impact analysis completed",
    description: "AI identified 4 technical impacts, 3 schedule risks",
    timestamp: "10 minutes ago",
    user: "AI Assistant",
  },
  {
    id: "act-2",
    type: "upload",
    title: "Structural_Plans_Rev3.pdf uploaded",
    timestamp: "2 hours ago",
    user: "John Smith",
  },
  {
    id: "act-3",
    type: "issue",
    title: "New critical issue flagged",
    description: "Foundation design revision required",
    timestamp: "2 hours ago",
    user: "AI Assistant",
  },
  {
    id: "act-4",
    type: "export",
    title: "Delay Notice exported",
    description: "Sent to Meridian Development Group",
    timestamp: "Yesterday",
    user: "Sarah Chen",
  },
  {
    id: "act-5",
    type: "comment",
    title: "Note added to MEP conflict",
    description: "Awaiting architect response",
    timestamp: "Yesterday",
    user: "Mike Johnson",
  },
  {
    id: "act-6",
    type: "update",
    title: "Project status changed to At Risk",
    timestamp: "2 days ago",
    user: "System",
  },
]

export const mockIntelligenceOutput: IntelligenceOutput = {
  id: "intel-1",
  query: "Analyze the impact of the revised foundation design on our project timeline and contractual obligations.",
  confidence: 87,
  missingInfo: [
    "Updated geotechnical report",
    "Revised pile load calculations",
  ],
  sections: [
    {
      id: "sec-1",
      label: "Technical Impact",
      icon: "wrench",
      items: [
        "Increased pile depth from 45ft to 60ft requires different equipment mobilization",
        "Additional reinforcement at pile caps increases concrete volume by 15%",
        "Revised soil bearing capacity requires redesign of spread footings at grid lines A-C",
        "Waterproofing scope expanded due to higher groundwater assumptions",
      ],
    },
    {
      id: "sec-2",
      label: "Schedule Impact",
      icon: "clock",
      items: [
        "Foundation work extended by approximately 3 weeks due to deeper pile installation",
        "Steel erection start date pushed from March 15 to April 5",
        "Critical path affected: overall project completion delayed by 18 working days",
        "Concrete pour sequence requires revision to accommodate new curing requirements",
      ],
      riskLevel: "high",
    },
    {
      id: "sec-3",
      label: "Contractual Position",
      icon: "scale",
      items: [
        "Change Order #7 entitles contractor to time extension under GC Section 8.3.1",
        "Differing site conditions clause (Section 4.3) applies to unexpected soil conditions",
        "Cost impact estimated at $340,000 for additional piling and equipment",
        "Owner-directed change triggers 15% markup per contract Section 7.2.4",
      ],
    },
    {
      id: "sec-4",
      label: "Commercial Impact",
      icon: "dollar",
      items: [
        "Direct cost increase: $285,000 (piling) + $55,000 (equipment)",
        "Extended general conditions: $12,500/day x 18 days = $225,000",
        "Potential subcontractor delay claims: $45,000 - $80,000 estimated",
        "Total exposure range: $565,000 - $660,000",
      ],
    },
    {
      id: "sec-5",
      label: "Risk Assessment",
      icon: "alert",
      items: [
        "Delay claims from subcontractors if schedule recovery plan not issued within 10 days",
        "Potential liquidated damages exposure if completion milestone missed",
        "Extended general conditions costs not fully covered by change order allowance",
        "Weather window for steel erection compressed, increasing schedule risk",
      ],
      riskLevel: "high",
    },
  ],
  recommendedActions: [
    {
      id: "action-1",
      label: "Issue RFI for pile load calculations",
      priority: "immediate",
      type: "rfi",
    },
    {
      id: "action-2",
      label: "Send delay notice to owner",
      priority: "immediate",
      type: "notice",
    },
    {
      id: "action-3",
      label: "Schedule coordination meeting",
      priority: "soon",
      type: "meeting",
    },
    {
      id: "action-4",
      label: "Review subcontractor agreements",
      priority: "soon",
      type: "review",
    },
    {
      id: "action-5",
      label: "Monitor weather forecasts",
      priority: "monitor",
      type: "document",
    },
  ],
  generatedAt: "10 minutes ago",
  sourcesUsed: [
    "Structural_Plans_Rev3.pdf",
    "General_Conditions_Contract.pdf",
    "RE_Foundation_Revision_Request.eml",
    "Subcontractor_Delay_Notice.eml",
  ],
}

export const mockDraftSections: DraftSection[] = [
  {
    id: "draft-1",
    title: "Subject & Reference",
    content: "RE: Notice of Delay - Foundation Design Revision\nProject: Riverside Commercial Tower\nContract No: RCT-2024-001\nDate: January 15, 2024",
    expanded: true,
  },
  {
    id: "draft-2",
    title: "Statement of Delay",
    content: "This letter serves as formal notice that the Contractor has encountered conditions that will result in a delay to the Project Schedule. The revised foundation design issued on January 10, 2024, constitutes a material change to the Contract Documents that impacts the critical path of construction.",
    expanded: true,
  },
  {
    id: "draft-3",
    title: "Impact Summary",
    content: "• Foundation work extended by 3 weeks\n• Steel erection delayed from March 15 to April 5\n• Overall project completion delayed by 18 working days\n• Estimated cost impact: $565,000 - $660,000",
    expanded: true,
  },
  {
    id: "draft-4",
    title: "Contractual Basis",
    content: "This notice is provided pursuant to General Conditions Section 8.3.1 (Time Extensions) and Section 4.3 (Differing Site Conditions). The Contractor reserves all rights under the Contract Documents to recover additional time and costs associated with this delay.",
    expanded: false,
  },
  {
    id: "draft-5",
    title: "Requested Action",
    content: "The Contractor requests a meeting within 5 business days to discuss schedule recovery options and to negotiate appropriate time extension and cost adjustment per Contract Section 7.2.4.",
    expanded: false,
  },
]

export const mockSavedOutputs: SavedOutput[] = [
  {
    id: "saved-1",
    type: "delay-notice",
    title: "Foundation Delay Notice - Draft",
    createdAt: "10 minutes ago",
    status: "draft",
  },
  {
    id: "saved-2",
    type: "status-report",
    title: "Weekly Status Report #12",
    createdAt: "2 days ago",
    status: "sent",
  },
  {
    id: "saved-3",
    type: "rfi",
    title: "RFI-047: Pile Load Calculations",
    createdAt: "3 days ago",
    status: "sent",
  },
  {
    id: "saved-4",
    type: "design-review",
    title: "MEP Coordination Review",
    createdAt: "1 week ago",
    status: "approved",
  },
]

export const suggestedPrompts = [
  "What are the technical implications of the revised foundation?",
  "How does the delay affect our critical path?",
  "What is our contractual position on the scope change?",
  "Identify risks in the current MEP coordination status",
  "Summarize open issues by priority",
]
