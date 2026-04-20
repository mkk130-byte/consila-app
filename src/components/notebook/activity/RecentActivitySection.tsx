import { ScrollArea } from "@/components/ui/scroll-area"
import { SectionTitle } from "@/src/components/ui/section-title"
import { ActivityItem } from "./ActivityItem"
import { Divider } from "@/src/components/ui/divider"
import type { ActivityItem as ActivityItemType } from "@/src/lib/types"

interface RecentActivitySectionProps {
  activities: ActivityItemType[]
}

export function RecentActivitySection({ activities }: RecentActivitySectionProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-3 py-3 border-b border-border">
        <SectionTitle>Recent Activity</SectionTitle>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="divide-y divide-border">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
