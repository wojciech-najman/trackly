import { useForm } from '@inertiajs/inertia-react';
import * as React from 'react';

export const useRegisterForm = () => {
  const { setData, data, processing, post, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    post('/register', { errorBag: 'login' });
  };

  return { handleSubmit, setData, data, processing, errors };
};
