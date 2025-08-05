import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { UserGroupIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { User } from '../../../models/user';
import { CompanyRole } from "../../../models/company-role";

export const useEditRoleAccountForm = (role: CompanyRole, user: User) => {
  const { setData, data, put, processing, errors } = useForm({
    role: String(role.id),
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/users/${user.id}/role/edit`, {
      preserveScroll: true,
      errorBag: 'users',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'User company role was successfully updated',
              icon: UserGroupIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
