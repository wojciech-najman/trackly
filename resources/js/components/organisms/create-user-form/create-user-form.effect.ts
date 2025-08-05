import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { UserGroupIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useCreateUserForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/users', {
      preserveScroll: true,
      errorBag: 'users',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'User was successfully created',
              icon: UserGroupIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
