import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { EditTagFormOrganism } from '../components/organisms/edit-tag-form/edit-tag-form.organism';
import { usePage } from '@inertiajs/inertia-react';
import { Tag } from '../models/tag';

export default function EditTag() {
  const { tag } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditTagFormOrganism tag={tag as Tag} />
      </div>
    </DashboardTemplate>
  );
}
