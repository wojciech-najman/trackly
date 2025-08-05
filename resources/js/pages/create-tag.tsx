import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { CreateTagFormOrganism } from '../components/organisms/create-tag-form/create-tag-form.organism';

export default function CreateTag() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateTagFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
