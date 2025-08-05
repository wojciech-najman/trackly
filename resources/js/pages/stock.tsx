import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { StockOrganism } from '../components/organisms/stock/stock.organism';
import { Stock } from '../models/stock';
import { Tag } from '../models/tag';

export default function Items() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <StockOrganism
        tags={props.tags as Tag[]}
        items={props.items as LengthAwarePaginator<Stock[]>}
      />
    </DashboardTemplate>
  );
}
