import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Project } from "../../types/projects"
import { ProjectImageSlider } from "./project-image-slider"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0 select-none rounded-full overflow-hidden dark:grayscale"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-full border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        <div className="flex-1 border-l border-dashed border-edge">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="leading-snug font-medium text-balance">
                  {project.title}
                </h3>
                {project.isFeatured && (
                  <span
                    className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium leading-none text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-300"
                    title="Featured project"
                  >
                    Featured
                  </span>
                )}
              </div>

              <dl className="text-sm text-muted-foreground">
                <dt className="sr-only">Period, team size, role</dt>
                <dd className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                  <span className="flex items-center gap-0.5">
                    <span>{start}</span>
                    {!isSinglePeriod && (
                      <>
                        <span className="font-mono">—</span>
                        {isOngoing ? (
                          <>
                            <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                            <span className="sr-only">Present</span>
                          </>
                        ) : (
                          <span>{end}</span>
                        )}
                      </>
                    )}
                  </span>
                  {(project.teamSize != null || project.role) && (
                    <>
                      <span className="text-muted-foreground/60" aria-hidden>·</span>
                      {project.teamSize != null && (
                        <span>{typeof project.teamSize === "number" ? `${project.teamSize} members` : project.teamSize}</span>
                      )}
                      {project.teamSize != null && project.role && (
                        <span className="text-muted-foreground/60" aria-hidden>·</span>
                      )}
                      {project.role && <span>{project.role}</span>}
                    </>
                  )}
                </dd>
              </dl>
            </div>

            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(project.link, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Open Project Link</span>
                  </a>
                }
              />
              <TooltipContent>
                <p>Open Project Link</p>
              </TooltipContent>
            </Tooltip>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsIcon duration={0.15} />
            </div>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-edge p-4">
          {project.description && (
            <ProseMono>
              <Markdown>{project.description}</Markdown>
            </ProseMono>
          )}

          {project.images && project.images.length > 0 && (
            <ProjectImageSlider
              images={project.images}
              altPrefix={project.title}
            />
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
