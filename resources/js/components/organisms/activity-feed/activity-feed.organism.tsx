import React from 'react';
import { ActivityFeedProps } from './activity-feed.props';
import { InertiaLink } from '@inertiajs/inertia-react';
import { ActivityActionMolecule } from '../../molecules/activity-action/activity-action.molecule';
import { SimpleEmptyStateMolecule } from '../../molecules/simple-empty-state/simple-empty-state.molecule';
import { InboxInIcon } from '@heroicons/react/outline';
import { DateFormats } from '../../../enums/date-formats.enum';

export const ActivityFeedOrganism = ({
  actions,
  title,
  buttonText,
  buttonUrl,
  dateFormat,
}: ActivityFeedProps) => {
  return (
    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
          {title}
        </h2>
        <div className="mt-6 flow-root">
          {actions.data.length ? (
            <ul role="list" className="-mb-8">
              {actions.data.map((action, index) => (
                <ActivityActionMolecule
                  dateFormat={dateFormat ?? DateFormats.DAY_MONTH}
                  last={actions.data.length === index + 1}
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
        <div className="mt-6 flex flex-col justify-stretch">
          <InertiaLink href={buttonUrl} as="button" className="btn btn-primary">
            {buttonText}
          </InertiaLink>
        </div>
      </div>
    </section>
  );
};

ActivityFeedOrganism.defaultProps = {
  dateFormat: DateFormats.DAY_MONTH,
};
