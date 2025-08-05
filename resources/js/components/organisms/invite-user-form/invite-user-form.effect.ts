import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { UserGroupIcon } from "@heroicons/react/outline";
import * as React from 'react';

export const useInviteUserForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post('/companies/users/invite', {
      preserveScroll: true,
      errorBag: 'users',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'User was successfully invited',
              icon: UserGroupIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
