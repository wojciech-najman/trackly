import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import * as React from 'react';
import { ChatAlt2Icon } from '@heroicons/react/outline';
import { ItemNote } from '../../../models/item-note';

export const useEditItemNoteForm = (note: ItemNote, onSuccess: () => void) => {
  const { setData, data, put, processing, errors } = useForm({
    note: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/items/${note.item_id}/note/${note.id}`, {
      preserveScroll: true,
      errorBag: 'note',
      onSuccess: () => {
        onSuccess();

        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Item note was successfully updated',
              icon: ChatAlt2Icon,
            }),
          200,
        );
      },
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
