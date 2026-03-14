"use client"

import { InfinityIcon } from "lucide-react"
import Image from "next/image"

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
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { EducationProgram } from "../../types/education"

type EducationProgramItemProps = {
  program: EducationProgram
  schoolName: string
  schoolLogo?: string
  schoolWebsite?: string
}

export function EducationProgramItem({
  program,
  schoolName,
  schoolLogo,
  schoolWebsite,
}: EducationProgramItemProps) {
  const { start, end } = program.period
  const isOngoing = !end
  const canExpand = !!program.description

  return (
    <Collapsible defaultOpen={program.isExpanded} disabled={!canExpand}>
      <div className="flex items-center hover:bg-accent-muted">
        <div className="mx-4 flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">
          {schoolLogo ? (
            <Image
              src={schoolLogo}
              alt=""
              width={24}
              height={24}
              quality={100}
              className="size-6 rounded-lg object-cover"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-6 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <span className="text-xs font-medium">
                {schoolName.charAt(0)}
              </span>
            </span>
          )}
        </div>

        <div className="flex-1 border-l border-dashed border-edge">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h4 className="mb-1 leading-snug font-medium text-balance">
                {schoolWebsite ? (
                  <a
                    className="underline-offset-2 hover:underline"
                    href={addQueryParams(schoolWebsite, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {schoolName}
                  </a>
                ) : (
                  schoolName
                )}
              </h4>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <dl>
                  <dt className="sr-only">Degree</dt>
                  <dd>{program.degree}</dd>
                </dl>
                {program.grade && (
                  <>
                    <Separator
                      className="data-vertical:h-4 data-vertical:self-center"
                      orientation="vertical"
                    />
                    <dl>
                      <dt className="sr-only">Grade</dt>
                      <dd>{program.grade}</dd>
                    </dl>
                  </>
                )}
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
            <Markdown>{program.description}</Markdown>
          </ProseMono>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}
