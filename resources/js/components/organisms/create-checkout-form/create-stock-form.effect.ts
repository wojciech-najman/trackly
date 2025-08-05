import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { ColorSwatchIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Stock } from '../../../models/stock';

export const useCreateCheckoutForm = (stock: Stock) => {
  const { setData, data, post, processing, errors } = useForm({
    quantity: '1',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post(`/checkouts/stock/${stock.id}/take`, {
      preserveScroll: true,
      errorBag: 'checkouts',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Item was checkout successfully',
              icon: ColorSwatchIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
