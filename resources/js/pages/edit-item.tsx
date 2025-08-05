import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { EditItemFormOrganism } from '../components/organisms/edit-item-form/edit-item-form.organism';
import { Item } from '../models/item';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { Action } from '../models/action';

export default function EditItem() {
  const { item, actions } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditItemFormOrganism
          actions={actions as LengthAwarePaginator<Action[]>}
          item={item as Item}
        />
      </div>
    </DashboardTemplate>
  );
}
