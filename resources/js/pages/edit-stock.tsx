import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { EditStockFormOrganism } from '../components/organisms/edit-stock-form/edit-stock-form.organism';
import { Stock } from '../models/stock';
import { Item } from '../models/item';
import { Store } from '../models/store';

export default function EditStock() {
  const { stock, stores, items } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditStockFormOrganism
          stores={stores as Store[]}
          items={items as Item[]}
          stock={stock as Stock}
        />
      </div>
    </DashboardTemplate>
  );
}
