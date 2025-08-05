import { notifyConfirm } from '../../../utils/notify.util';
import { Inertia } from '@inertiajs/inertia';
import { ItemNote } from '../../../models/item-note';
import { ChatAlt2Icon } from '@heroicons/react/solid';

export const useDeleteItemNote = () => {
  const confirmItemNoteRemoval = (note: ItemNote) => {
    notifyConfirm({
      title: 'Delete note',
      description: `Are you sure you want to delete item note? `,
      acceptText: 'Delete',
      accepted: () => deleteItemNote(note),
      acceptBtnStyles: 'text-error-color',
      icon: ChatAlt2Icon,
    });
  };

  const deleteItemNote = (note: ItemNote) => {
    Inertia.delete(`/items/${note.item_id}/note/${note.id}`, {
      preserveScroll: true,
      errorBag: 'note',
    });
  };

  return { confirmItemNoteRemoval };
};
