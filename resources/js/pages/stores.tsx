import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { Store } from '../models/store';
import { StoresOrganism } from '../components/organisms/stores/stores.organism';

export default function Stores() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <StoresOrganism items={props.items as LengthAwarePaginator<Store[]>} />
    </DashboardTemplate>
  );
}
