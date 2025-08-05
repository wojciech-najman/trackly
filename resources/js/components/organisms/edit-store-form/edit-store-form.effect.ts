import { Store } from '../../../models/store';
import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { InboxInIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useEditStoreForm = (store: Store) => {
  const { setData, data, put, processing, errors } = useForm({
    id: store.id,
    name: store.name,
    description: store.description,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/stores/${store.id}`, {
      preserveScroll: true,
      errorBag: 'stores',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Store was successfully updated',
              icon: InboxInIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
