import { notifyConfirm } from '../../../utils/notify.util';
import { DatabaseIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { Item } from '../../../models/item';

export const useDeleteItem = () => {
  const confirmItemRemoval = (item: Item) => {
    notifyConfirm({
      title: 'Delete item',
      description: `Are you sure you want to delete item: ${item.name}? `,
      acceptText: 'Delete',
      accepted: () => deleteItem(item.id),
      acceptBtnStyles: 'text-error-color',
      icon: DatabaseIcon,
    });
  };

  const deleteItem = (id: number) => {
    Inertia.delete(`/items/${id}`, {
      preserveScroll: true,
      errorBag: 'items',
    });
  };

  return { confirmItemRemoval };
};
