import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { DatabaseIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useCreateItemForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    name: '',
    description: '',
    code: '',
    price: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/items', {
      preserveScroll: true,
      errorBag: 'items',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Item was successfully created',
              icon: DatabaseIcon,
            }),
          200,
        ),
    });
  };

  return { data, setData, processing, errors, handleSubmit };
};
