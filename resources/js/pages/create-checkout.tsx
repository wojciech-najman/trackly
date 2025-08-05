import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { CreateCheckoutFormOrganism } from '../components/organisms/create-checkout-form/create-checkout-form.organism';
import { Stock } from '../models/stock';

export default function CreateCheckout() {
  const { stock } = usePage().props;

  return (
      <DashboardTemplate>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CreateCheckoutFormOrganism stock={stock as Stock} />
        </div>
      </div>
    </DashboardTemplate>
  );
}
