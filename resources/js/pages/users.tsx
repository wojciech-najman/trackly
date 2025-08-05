import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { UsersOrganism } from '../components/organisms/users/users.organism';
import { CompanyUser } from '../models/company-user';

export default function Users() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <UsersOrganism items={props.items as LengthAwarePaginator<CompanyUser[]>} />
    </DashboardTemplate>
  );
}
