import { useForm } from '@inertiajs/inertia-react';
import { User } from '../../../models/user';
import { Store } from '../../../models/store';
import { Inertia } from '@inertiajs/inertia';

export const useDetachStoreForm = () => {
  const { processing, errors, delete: deleteQuery } = useForm({});

  const handleSubmit = (store: Store, user: User) => {
    deleteQuery(`/users/${user.id}/store/${store.id}/detach`, {
      preserveScroll: true,
      errorBag: 'stores',
      onSuccess: () => {
        Inertia.reload({ only: ['store_users'] });
      },
    });
  };

  return { handleSubmit, processing, errors };
};
