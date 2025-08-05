import { useForm } from '@inertiajs/inertia-react';
import * as React from 'react';

export const useSwitchCompanyForm = () => {
  const { setData, data, post, processing, errors } = useForm({
    company_id: '',
  });

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    post(`/companies/switch`, {
      preserveScroll: true,
      errorBag: 'company',
    });
  };

  return { handleSubmit, setData, data, processing, errors };
};
