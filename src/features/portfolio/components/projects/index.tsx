import { CollapsibleList } from "@/components/collapsible-list"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectItem } from "./project-item"

const SORTED_PROJECTS = [...PROJECTS].sort(
  (a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured)
)

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
