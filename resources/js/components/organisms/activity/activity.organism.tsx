import React from "react";
import { ActivityProps } from "./activity.props";
import { ActivityActionMolecule } from "../../molecules/activity-action/activity-action.molecule";
import {
    SimpleEmptyStateMolecule
} from "../../molecules/simple-empty-state/simple-empty-state.molecule";
import { InboxInIcon } from "@heroicons/react/outline";
import { DateFormats } from "../../../enums/date-formats.enum";
import { PaginationBoxMolecule } from "../../molecules/pagination-box/pagination-box.molecule";
import { ActivityFiltersOrganism } from "../activity-filters/activity-filters.organism";

export const ActivityOrganism = ({ items }: ActivityProps) => {
  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Activity log</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <ActivityFiltersOrganism />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                Activity log
              </h2>
              <div className="mt-6 flow-root">
                {items.data.length ? (
                  <ul role="list" className="-mb-8">
                    {items.data.map((action, index) => (
                      <ActivityActionMolecule
                        dateFormat={DateFormats.FULL}
                        last={items.data.length === index + 1}
                        action={action}
                      />
                    ))}
                  </ul>
                ) : (
                  <SimpleEmptyStateMolecule
                    title="No activity"
                    text="There was no registered activity yet"
                    icon={InboxInIcon}
                  />
                )}
              </div>
            </div>

            <PaginationBoxMolecule paginator={items} />
          </div>
        </div>
      </div>
    </>
  );
};
