import React from 'react';
import { ActivityActionProps } from './activity-action.props';
import { classNames } from '../../../utils/class-names.util';
import { activityFeedIcons } from '../../../enums/activity-feed-icons';
import format from 'date-fns/format';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

export const ActivityActionMolecule = ({ action, last, dateFormat }: ActivityActionProps) => {
  const Icon = activityFeedIcons[action.type]?.icon ?? <QuestionMarkCircleIcon />;

  return (
    <li key={action.id}>
      <div className="relative pb-8">
        {!last ? (
          <span
            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        ) : null}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={classNames(
                activityFeedIcons[action.type]?.bgColorClass ?? 'bg-gray-400',
                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
              )}
            >
              <Icon className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="min-w-0 flex-1 flex justify-between space-x-4">
            <div>
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: action.description }}
              />
              <p className="text-sm italic text-gray-400">by: {action.user.name}</p>
            </div>
            <div className="text-right text-sm whitespace-nowrap text-gray-500">
              <time dateTime={action.created_at}>
                {format(new Date(action.created_at), dateFormat)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
