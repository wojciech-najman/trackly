import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { User } from '../models/user';
import { PasswordForm } from '../components/organisms/password-form/password-form';
import { AccountFormOrganism } from '../components/organisms/account-form/account-form.organism';

export default function Profile() {
  const user = usePage().props.user as User;

  return (
    <DashboardTemplate>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AccountFormOrganism user={user} />
        </div>
      </div>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PasswordForm />
        </div>
      </div>
    </DashboardTemplate>
  );
}
