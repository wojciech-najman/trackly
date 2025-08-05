import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { EditStoreFormOrganism } from '../components/organisms/edit-store-form/edit-store-form.organism';
import { Store } from '../models/store';

export default function EditTag() {
  const { store } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditStoreFormOrganism store={store as Store} />
      </div>
    </DashboardTemplate>
  );
}
