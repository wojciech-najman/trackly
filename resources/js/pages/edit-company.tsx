import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { EditCompanyFormOrganism } from '../components/organisms/edit-company-form/edit-company-form.organism';

export default function EditCompany() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditCompanyFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
