import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { TagsOrganism } from '../components/organisms/tags/tags.organism';
import { Tag } from '../models/tag';

export default function Tags() {
  const props = usePage().props;

  return (
    <DashboardTemplate>
      <TagsOrganism items={props.items as LengthAwarePaginator<Tag[]>} />
    </DashboardTemplate>
  );
}
