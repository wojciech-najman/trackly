import React from 'react';
import { ItemNotesOrganism } from '../item-notes/item-notes.organism';
import { ActivityFeedOrganism } from '../activity-feed/activity-feed.organism';
import { ItemViewProps } from './item-view.props';
import { ItemDetailsOrganism } from '../item-details/item-details.organism';
import { ItemNote } from '../../../models/item-note';
import { DateFormats } from '../../../enums/date-formats.enum';

export const ItemViewOrganism = ({ item, actions }: ItemViewProps) => {
  return (
    <>
      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-6xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          <ItemDetailsOrganism item={item} />
          <ItemNotesOrganism itemId={item.id} notes={item.notes as ItemNote[]} />
        </div>
        <ActivityFeedOrganism
          title="Latest activity"
          buttonText="More activities"
          buttonUrl={`/activity?search=${item.name}`}
          actions={actions}
          dateFormat={DateFormats.DAY_MONTH_SHORT}
        />
      </div>
    </>
  );
};
