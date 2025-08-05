import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { EditUserRoleFormOrganism } from '../components/organisms/edit-user-role-form/edit-user-role-form.organism';
import { CompanyRole } from '../models/company-role';
import { User } from '../models/user';

export default function EditUserRole() {
  const { user_role, roles, edited_user } = usePage().props;

  return (
    <DashboardTemplate>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditUserRoleFormOrganism
            user={edited_user as User}
            role={user_role as CompanyRole}
            roles={roles as CompanyRole[]}
          />
        </div>
      </div>
    </DashboardTemplate>
  );
}
