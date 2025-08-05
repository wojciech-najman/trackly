import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { TagIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Item } from '../../../models/item';

export const useAttachTagForm = (item: Item) => {
  const { setData, data, post, processing, errors } = useForm({
    tag_id: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post(`/tags/attach/items/${item.id}`, {
      preserveScroll: true,
      errorBag: 'tags',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Tag was successfully attached to item',
              icon: TagIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
