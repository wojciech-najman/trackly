import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { CheckoutsOrganism } from '../components/organisms/checkouts/checkouts.organism';
import { ItemCheckout } from '../models/item-checkout';

export default function Checkouts() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <CheckoutsOrganism items={props.items as LengthAwarePaginator<ItemCheckout[]>} />
    </DashboardTemplate>
  );
}
