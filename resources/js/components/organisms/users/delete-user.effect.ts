import { notifyConfirm } from '../../../utils/notify.util';
import { UserGroupIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { User } from '../../../models/user';

export const useDeleteUser = () => {
  const confirmUserRemoval = (user: User) => {
    notifyConfirm({
      title: 'Delete user',
      description: `Are you sure you want to delete user: ${user.name}? `,
      acceptText: 'Delete',
      accepted: () => deleteUser(user.id),
      acceptBtnStyles: 'text-error-color',
      icon: UserGroupIcon,
    });
  };

  const deleteUser = (id: number) => {
    Inertia.delete(`/users/${id}`, {
      preserveScroll: true,
      errorBag: 'users',
    });
  };

  return { confirmUserRemoval };
};
