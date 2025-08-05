import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { ClipboardListIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useCreateStockForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    store_id: '',
    item_id: '',
    quantity: '1',
    low_stock: '0',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/stock', {
      preserveScroll: true,
      errorBag: 'stock',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Stock was successfully created',
              icon: ClipboardListIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
