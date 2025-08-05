import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { CreateCompanyFormOrganism } from '../components/organisms/create-company-form/create-company-form.organism';

export default function CreateTag() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateCompanyFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
