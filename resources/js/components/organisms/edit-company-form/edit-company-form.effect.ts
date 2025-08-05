import { useForm } from '@inertiajs/inertia-react';
import { notifyOk } from '../../../utils/notify.util';
import { LibraryIcon } from '@heroicons/react/outline';
import * as React from 'react';
import { useSharedData } from '../../../hooks/shared-data.effect';

export const useEditCompanyForm = () => {
  const sharedData = useSharedData();

  const { setData, data, put, processing, errors } = useForm({
    name: sharedData.company?.name,
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    put(`/companies`, {
      preserveScroll: true,
      errorBag: 'company',
      onSuccess: () =>
        setTimeout(
          () =>
            notifyOk({
              title: 'Success',
              description: 'Company was successfully updated',
              icon: LibraryIcon,
            }),
          200,
        ),
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
