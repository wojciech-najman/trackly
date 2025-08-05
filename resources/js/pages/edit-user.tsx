import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { User } from '../models/user';
import { EditUserAccountFormOrganism } from '../components/organisms/edit-user-account-form/edit-user-account-form.organism';
import { EditUserPasswordFormOrganism } from '../components/organisms/edit-user-password-form/edit-user-password-form.organism';

export default function EditUser() {
  const user = usePage().props.edited_user as User;

  return (
    <DashboardTemplate>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditUserAccountFormOrganism user={user} />
        </div>
      </div>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditUserPasswordFormOrganism user={user} />
        </div>
      </div>
    </DashboardTemplate>
  );
}
