import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { DatabaseIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Item } from '../../../models/item';

export const useEditItemForm = (item: Item) => {
  const { setData, data, put, processing, errors } = useForm({
    id: item.id,
    name: item.name,
    description: item.description,
    code: item.code,
    price: item.price,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/items/${item.id}`, {
      preserveScroll: true,
      errorBag: 'items',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Item was successfully updated',
              icon: DatabaseIcon,
            }),
          200,
        ),
    });
  };

  return { setData, handleSubmit, data, processing, errors };
};
