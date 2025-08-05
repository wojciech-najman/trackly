import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { ClipboardListIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Stock } from '../../../models/stock';

export const useEditStockForm = (stock: Stock) => {
  const { setData, data, put, processing, errors } = useForm({
    quantity: String(stock.quantity),
    low_stock: String(stock.low_stock),
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/stock/${stock.id}`, {
      preserveScroll: true,
      errorBag: 'stock',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Stock was successfully updated',
              icon: ClipboardListIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
