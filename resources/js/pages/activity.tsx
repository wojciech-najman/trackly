import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { ActivityOrganism } from '../components/organisms/activity/activity.organism';
import { Action } from '../models/action';

export default function Activity() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <ActivityOrganism items={props.items as LengthAwarePaginator<Action[]>} />
    </DashboardTemplate>
  );
}
