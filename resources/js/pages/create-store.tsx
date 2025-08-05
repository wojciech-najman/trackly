import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { CreateStoreFormOrganism } from '../components/organisms/create-store-form/create-store-form.organism';

export default function CreateStore() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateStoreFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
