import { evaluateProjectRisk } from "../lib/risk-engine"

export default function Page() {
  const result = evaluateProjectRisk({
    projectName: "Obhur City",
    plannedProgress: 70,
    actualProgress: 50,
    openIssues: 10,
    criticalIssues: 5,
    delayDays: 12,
    costVariance: 6,
    safetyIncidents: 1,
    rfiResponseDays: 8,
    documentApprovalDelayDays: 10,
    contractorPerformanceRating: 2,
    clientDecisionDelayDays: 9,
  })

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Consila – Project Intelligence</h1>

      <h2>Risk Score: {result.riskScore}</h2>
      <h3>Risk Level: {result.riskLevel}</h3>
      <h3>Delay Probability: {result.delayProbability}%</h3>

      <h3>Actions:</h3>
      <ul>
        {result.actions.map((a, i) => (
          <li key={i}>
            <strong>{a.title}</strong> — {a.reason}
          </li>
        ))}
      </ul>
    </main>
  )
}
