import { useForm } from '@inertiajs/inertia-react';
import { User } from '../../../models/user';
import { Store } from '../../../models/store';
import { Inertia } from '@inertiajs/inertia';

export const useAttachStoreForm = () => {
  const { post, processing, errors } = useForm({});

  const handleSubmit = (store: Store, user: User) => {
    post(`/users/${user.id}/store/${store.id}/attach`, {
      preserveScroll: true,
      errorBag: 'stores',
      onSuccess: () => {
        Inertia.reload({ only: ['store_users'] });
      },
    });
  };

  return { handleSubmit, processing, errors };
};
