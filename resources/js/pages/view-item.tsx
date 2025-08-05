import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { ItemViewOrganism } from '../components/organisms/item-view/item-view.organism';
import { usePage } from '@inertiajs/inertia-react';
import { Item } from '../models/item';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { Action } from '../models/action';

export default function ViewItem() {
  const { item, actions } = usePage().props;

  return (
    <DashboardTemplate>
      <ItemViewOrganism actions={actions as LengthAwarePaginator<Action[]>} item={item as Item} />
    </DashboardTemplate>
  );
}
