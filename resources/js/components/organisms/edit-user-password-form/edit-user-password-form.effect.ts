import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { KeyIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { User } from '../../../models/user';

export const useEditUserPasswordForm = (user: User) => {
  const { setData, data, put, processing, errors } = useForm({
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/users/${user.id}/password`, {
      preserveScroll: true,
      errorBag: 'users',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'User password was successfully changed',
              icon: KeyIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
