import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { InviteUserFormOrganism } from '../components/organisms/invite-user-form/invite-user-form.organism';

export default function InviteUser() {
  return (
    <DashboardTemplate>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <InviteUserFormOrganism />
      </div>
    </DashboardTemplate>
  );
}
