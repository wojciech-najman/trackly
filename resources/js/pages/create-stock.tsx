import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { CreateStockFormOrganism } from '../components/organisms/create-stock-form/create-stock-form.organism';
import { usePage } from '@inertiajs/inertia-react';
import { Item } from '../models/item';
import { Store } from '../models/store';

export default function CreateStock() {
  const { stores, items } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreateStockFormOrganism items={items as Item[]} stores={stores as Store[]} />
      </div>
    </DashboardTemplate>
  );
}
