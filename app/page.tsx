"use client"

import { useState } from "react"
import { evaluateProjectRisk } from "../lib/risk-engine"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

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
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Consila Dashboard</h1>
            <p className="mt-2 text-zinc-400">
              Overview of your construction projects and risk status
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
          >
            New Project
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-lg font-semibold">Project Name</h2>
            <p className="mt-2 text-zinc-300">{result.projectName}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-lg font-semibold">Risk Score</h2>
            <p className="mt-2 text-zinc-300">{result.riskScore}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-lg font-semibold">Risk Level</h2>
            <p className="mt-2 text-zinc-300">{result.riskLevel}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-lg font-semibold">Summary</h2>
          <p className="text-zinc-300">
            This sample project currently shows a risk level of{" "}
            <span className="font-semibold text-white">{result.riskLevel}</span>
            {" "}with a score of{" "}
            <span className="font-semibold text-white">{result.riskScore}</span>.
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Create New Project
            </h2>

            <div className="grid gap-3">
              <input
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
                placeholder="Project Name"
              />
              <input
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
                placeholder="Client Name"
              />
              <input
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
                placeholder="Project Type"
              />
              <input
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
                placeholder="Risk Level"
              />
              <input
                type="date"
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
              />
              <input
                type="date"
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-lg border border-zinc-700 px-4 py-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
