import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { UserGroupIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { User } from '../../../models/user';

export const useEditUserAccountForm = (user: User) => {
  const { setData, data, put, processing, errors } = useForm({
    name: user.name,
    email: user.email,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/users/${user.id}/account`, {
      preserveScroll: true,
      errorBag: 'users',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'User account was successfully updated',
              icon: UserGroupIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
