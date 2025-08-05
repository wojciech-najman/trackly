import { useForm } from '@inertiajs/inertia-react';
import * as React from 'react';

export const useLoginForm = () => {
  const { setData, data, processing, post, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    post('/login', { errorBag: 'login' });
  };

  return { handleSubmit, setData, data, processing, errors };
};
