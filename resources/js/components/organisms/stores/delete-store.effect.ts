import { notifyConfirm } from '../../../utils/notify.util';
import { InboxInIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { Store } from '../../../models/store';

export const useDeleteStore = () => {
  const confirmStoreRemoval = (store: Store) => {
    notifyConfirm({
      title: 'Delete store',
      description: `Are you sure you want to delete store: ${store.name}? `,
      acceptText: 'Delete',
      accepted: () => deleteStore(store.id),
      acceptBtnStyles: 'text-error-color',
      icon: InboxInIcon,
    });
  };

  const deleteStore = (id: number) => {
    Inertia.delete(`/stores/${id}`, {
      preserveScroll: true,
      errorBag: 'stores',
    });
  };

  return { confirmStoreRemoval };
};
