import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { SwitchCompanyFormOrganism } from '../components/organisms/switch-company-form/switch-company-form.organism';
import { usePage } from '@inertiajs/inertia-react';
import { CompanyUser } from '../models/company-user';

export default function EditCompany() {
  const { userCompanies } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SwitchCompanyFormOrganism userCompanies={userCompanies as CompanyUser[]} />
      </div>
    </DashboardTemplate>
  );
}
