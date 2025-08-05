import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { Stock } from '../models/stock';
import { Item } from '../models/item';
import { Store } from '../models/store';
import { MoveStockFormOrganism } from '../components/organisms/move-stock-form/move-stock-form.organism';

export default function MoveStock() {
  const { stock, stores, items } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MoveStockFormOrganism
          stores={stores as Store[]}
          items={items as Item[]}
          stock={stock as Stock}
        />
      </div>
    </DashboardTemplate>
  );
}
