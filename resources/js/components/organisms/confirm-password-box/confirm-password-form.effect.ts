import { useForm } from '@inertiajs/inertia-react';
import * as React from 'react';

export const useConfirmPasswordForm = () => {
  const { setData, data, processing, post, errors } = useForm({
    password: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    post('/user/confirm-password', { errorBag: 'password' });
  };

  return { handleSubmit, setData, data, processing, errors };
};
