export type ProjectInput = {
  projectName: string
  plannedProgress: number
  actualProgress: number
  openIssues: number
  criticalIssues: number
  delayDays: number
  costVariance: number
  safetyIncidents: number
  rfiResponseDays: number
  documentApprovalDelayDays: number
  contractorPerformanceRating: 1 | 2 | 3 | 4 | 5
  clientDecisionDelayDays: number
}

export type RiskLevel = "Low" | "Medium" | "High" | "Critical"

export type RecommendedAction = {
  priority: 1 | 2 | 3
  title: string
  reason: string
  owner: string
}

export type RiskResult = {
  riskScore: number
  riskLevel: RiskLevel
  delayProbability: number
  progressVariance: number
  scoreBreakdown: Record<string, number>
  actions: RecommendedAction[]
}

function scoreProgressVariance(variance: number): number {
  if (variance <= 5) return 5
  if (variance <= 10) return 12
  if (variance <= 20) return 22
  return 30
}

function scoreCriticalIssues(count: number): number {
  if (count === 0) return 0
  if (count <= 2) return 8
  if (count <= 5) return 15
  return 22
}

function scoreDelayDays(days: number): number {
  if (days <= 3) return 3
  if (days <= 10) return 10
  if (days <= 20) return 18
  return 25
}

function scoreCostVariance(percent: number): number {
  if (percent <= 2) return 2
  if (percent <= 5) return 8
  if (percent <= 10) return 15
  return 22
}

function scoreSafetyIncidents(count: number): number {
  if (count === 0) return 0
  if (count === 1) return 8
  if (count === 2) return 15
  return 25
}

function scoreRfiResponseDays(days: number): number {
  if (days <= 3) return 2
  if (days <= 7) return 8
  if (days <= 14) return 14
  return 20
}

function scoreDocumentApprovalDelay(days: number): number {
  if (days <= 3) return 2
  if (days <= 7) return 7
  if (days <= 14) return 12
  return 18
}

function scoreContractorPerformance(rating: 1 | 2 | 3 | 4 | 5): number {
  switch (rating) {
    case 5:
      return 0
    case 4:
      return 5
    case 3:
      return 10
    case 2:
      return 18
    case 1:
      return 25
  }
}

function scoreClientDecisionDelay(days: number): number {
  if (days <= 3) return 1
  if (days <= 7) return 5
  if (days <= 14) return 10
  return 16
}

function classifyRisk(score: number): RiskLevel {
  if (score <= 24) return "Low"
  if (score <= 49) return "Medium"
  if (score <= 74) return "High"
  return "Critical"
}

export function evaluateProjectRisk(input: ProjectInput): RiskResult {
  const progressVariance = Math.max(input.plannedProgress - input.actualProgress, 0)

  const scoreBreakdown = {
    progressVariance: scoreProgressVariance(progressVariance),
    criticalIssues: scoreCriticalIssues(input.criticalIssues),
    delayDays: scoreDelayDays(input.delayDays),
    costVariance: scoreCostVariance(input.costVariance),
    safetyIncidents: scoreSafetyIncidents(input.safetyIncidents),
    rfiResponseDays: scoreRfiResponseDays(input.rfiResponseDays),
    documentApprovalDelayDays: scoreDocumentApprovalDelay(input.documentApprovalDelayDays),
    contractorPerformance: scoreContractorPerformance(input.contractorPerformanceRating),
    clientDecisionDelayDays: scoreClientDecisionDelay(input.clientDecisionDelayDays),
  }

  const rawScore = Object.values(scoreBreakdown).reduce((sum, value) => sum + value, 0)
  const riskScore = Math.min(rawScore, 100)
  const riskLevel = classifyRisk(riskScore)

  let delayProbability = riskScore
  if (progressVariance > 20) delayProbability += 10
  if (input.criticalIssues > 5) delayProbability += 8
  if (input.delayDays > 20) delayProbability += 12
  if (input.contractorPerformanceRating <= 2) delayProbability += 8
  delayProbability = Math.min(delayProbability, 95)

  const actions: RecommendedAction[] = []

  if (progressVariance > 10) {
    actions.push({
      priority: 1,
      title: "Issue recovery plan",
      reason: "Actual progress is materially behind planned progress.",
      owner: "Contractor / Project Manager",
    })
  }

  if (input.criticalIssues > 3) {
    actions.push({
      priority: 1,
      title: "Escalate unresolved critical issues",
      reason: "Critical issues exceed acceptable threshold.",
      owner: "PMO / Engineering Lead",
    })
  }

  if (input.delayDays > 10) {
    actions.push({
      priority: 1,
      title: "Trigger schedule mitigation workshop",
      reason: "Project delay exceeds 10 days.",
      owner: "Project Controls",
    })
  }

  if (input.costVariance > 5) {
    actions.push({
      priority: 2,
      title: "Review cost drift drivers",
      reason: "Cost variance is above control band.",
      owner: "Commercial Manager",
    })
  }

  if (input.safetyIncidents >= 2) {
    actions.push({
      priority: 1,
      title: "Launch safety intervention",
      reason: "Multiple safety incidents indicate execution control weakness.",
      owner: "HSE Manager",
    })
  }

  if (input.rfiResponseDays > 7) {
    actions.push({
      priority: 2,
      title: "Escalate RFI turnaround",
      reason: "Slow responses are blocking progress.",
      owner: "Design Manager / Engineer",
    })
  }

  if (input.documentApprovalDelayDays > 7) {
    actions.push({
      priority: 2,
      title: "Expedite submittal approvals",
      reason: "Approval lag is constraining site execution.",
      owner: "Client / Consultant",
    })
  }

  if (input.contractorPerformanceRating <= 2) {
    actions.push({
      priority: 1,
      title: "Review contractor recovery capability",
      reason: "Low contractor performance is driving execution risk.",
      owner: "Project Director",
    })
  }

  if (input.clientDecisionDelayDays > 7) {
    actions.push({
      priority: 2,
      title: "Escalate pending client decisions",
      reason: "Decision bottlenecks are affecting schedule certainty.",
      owner: "Client Representative",
    })
  }

  if (actions.length === 0) {
    actions.push({
      priority: 3,
      title: "Maintain current controls",
      reason: "Project is within acceptable control thresholds.",
      owner: "Project Manager",
    })
  }

  actions.sort((a, b) => a.priority - b.priority)

  return {
    riskScore,
    riskLevel,
    delayProbability,
    progressVariance,
    scoreBreakdown,
    actions,
  }
}
