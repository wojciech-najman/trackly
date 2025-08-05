import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import * as React from 'react';
import { ChatAlt2Icon } from '@heroicons/react/outline';

export const useCreateItemNoteForm = (itemId: number) => {
  const { setData, data, post, processing, errors, reset } = useForm({
    note: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post(`/items/${itemId}/note`, {
      preserveScroll: true,
      errorBag: 'note',
      onSuccess: () => {
        reset();

        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Item note was successfully created',
              icon: ChatAlt2Icon,
            }),
          200,
        );
      },
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
