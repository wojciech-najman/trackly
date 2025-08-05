import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { InboxInIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useCreateStoreForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    name: '',
    description: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/stores', {
      preserveScroll: true,
      errorBag: 'stores',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Store was successfully created',
              icon: InboxInIcon,
            }),
          200,
        ),
    });
  };

  return { data, setData, handleSubmit, processing, errors };
};
