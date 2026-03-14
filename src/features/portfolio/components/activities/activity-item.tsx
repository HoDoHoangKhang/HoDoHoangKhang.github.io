import { InfinityIcon, UsersIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Markdown } from "@/components/markdown"
import { Separator } from "@/components/ui/separator"
import { ProseMono } from "@/components/ui/typography"

import type { Activity } from "../../types/activities"

export function ActivityItem({
  className,
  activity,
}: {
  className?: string
  activity: Activity
}) {
  const { start, end } = activity.period
  const isOngoing = !end
  const canExpand = !!activity.description

  return (
    <Collapsible className={className} disabled={!canExpand}>
      <div className="flex items-center hover:bg-accent-muted">
        <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">
          <UsersIcon className="pointer-events-none size-4 text-muted-foreground" />
        </div>

        <div className="flex-1 border-l border-dashed border-edge">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {activity.organizationName}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Role</dt>
                  <dd>{activity.role}</dd>
                </dl>

                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                />

                <dl>
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>
            </div>

            {canExpand && (
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsIcon duration={0.15} />
              </div>
            )}
          </CollapsibleTrigger>
        </div>
      </div>

      {canExpand && (
        <CollapsibleContent className="overflow-hidden">
          <ProseMono className="border-t border-edge p-4">
            <Markdown>{activity.description}</Markdown>
          </ProseMono>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}
