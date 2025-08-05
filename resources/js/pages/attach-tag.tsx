import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { AttachTagFormOrganism } from '../components/organisms/attach-tag-form/attach-tag-form.organism';
import { usePage } from '@inertiajs/inertia-react';
import { Tag } from '../models/tag';
import { Item } from '../models/item';

export default function AttachTag() {
  const { item, tags } = usePage().props;

  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AttachTagFormOrganism tags={tags as Tag[]} item={item as Item} />
      </div>
    </DashboardTemplate>
  );
}
