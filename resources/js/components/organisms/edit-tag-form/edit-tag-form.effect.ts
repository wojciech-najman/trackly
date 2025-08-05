import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { TagIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { Tag } from '../../../models/tag';

export const useEditTagForm = (tag: Tag) => {
  const { setData, data, put, processing, errors } = useForm({
    id: tag.id,
    name: tag.name,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/tags/${tag.id}`, {
      preserveScroll: true,
      errorBag: 'tags',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Tag was successfully updated',
              icon: TagIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
