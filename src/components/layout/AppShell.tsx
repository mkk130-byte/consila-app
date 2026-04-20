import { TopBar } from "./TopBar"

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <TopBar />
      {children}
    </div>
  )
}
