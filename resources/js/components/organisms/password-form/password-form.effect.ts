import { notifyOk } from '../../../utils/notify.util';
import * as React from 'react';
import { useForm } from '@inertiajs/inertia-react';

export const usePasswordForm = () => {
  const { setData, data, post, processing, errors, reset } = useForm({
    oldPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/profile/password', {
      preserveScroll: true,
      errorBag: 'password',
      onSuccess: () => {
        reset();

        notifyOk({ title: 'Success', description: 'Your password was updated' });
      },
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
