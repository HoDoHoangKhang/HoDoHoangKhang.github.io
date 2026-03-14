"use client"

import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

import { TECH_STACK } from "../data/tech-stack"
import { getTechStackIconUrl } from "../data/tech-stack-icon-slugs"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={tech.title}
                      >
                        {tech.theme ? (
                          <>
                            <Image
                              src={getTechStackIconUrl(tech.key, "light")}
                              alt={`${tech.title} light icon`}
                              width={32}
                              height={32}
                              className="hidden [html.light_&]:block"
                              unoptimized
                            />
                            <Image
                              src={getTechStackIconUrl(tech.key, "dark")}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className="hidden [html.dark_&]:block"
                              unoptimized
                            />
                          </>
                        ) : (
                          <Image
                            src={getTechStackIconUrl(tech.key)}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            unoptimized
                          />
                        )}
                      </a>
                    }
                  />
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
