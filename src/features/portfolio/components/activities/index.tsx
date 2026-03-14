import { ACTIVITIES } from "../../data/activities"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ActivityItem } from "./activity-item"

export function Activities() {
  return (
    <Panel id="activities">
      <PanelHeader>
        <PanelTitle>
          Activities
          <PanelTitleSup>({ACTIVITIES.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-edge last:border-b-0"
          >
            <ActivityItem activity={activity} />
          </div>
        ))}
      </div>
    </Panel>
  )
}
