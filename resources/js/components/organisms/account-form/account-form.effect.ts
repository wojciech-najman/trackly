import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import * as React from 'react';
import { User } from '../../../models/user';

export const useAccountForm = (user: User) => {
  const { setData, data, post, processing, errors } = useForm({
    name: user.name,
    email: user.email,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/profile/account', {
      preserveScroll: true,
      errorBag: 'account',
      onSuccess: () => notifyOk({ title: 'Success', description: 'Your profile was updated' }),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
