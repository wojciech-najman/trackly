import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { CreateItemFormOrganism } from '../components/organisms/create-item-form/create-item-form.organism';

export default function CreateItem() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateItemFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
