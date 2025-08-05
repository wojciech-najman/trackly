import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { ItemsOrganism } from '../components/organisms/items/items.organism';
import { Item } from '../models/item';
import { Tag } from '../models/tag';

export default function Items() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <ItemsOrganism
        tags={props.tags as Tag[]}
        items={props.items as LengthAwarePaginator<Item[]>}
      />
    </DashboardTemplate>
  );
}
