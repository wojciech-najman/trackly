import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { TagIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useCreateTagForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    name: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/tags', {
      preserveScroll: true,
      errorBag: 'tags',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Tag was successfully created',
              icon: TagIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
