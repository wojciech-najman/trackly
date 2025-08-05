import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { ClipboardListIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Stock } from '../../../models/stock';

export const useMoveStockForm = (stock: Stock) => {
  const { setData, data, post, processing, errors } = useForm({
    store_id: '',
    quantity: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post(`/stock/${stock.id}/move`, {
      preserveScroll: true,
      errorBag: 'stock',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Stock was successfully moved',
              icon: ClipboardListIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
