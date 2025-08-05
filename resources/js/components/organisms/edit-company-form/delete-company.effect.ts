import { notifyConfirm } from '../../../utils/notify.util';
import { LibraryIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useSharedData } from '../../../hooks/shared-data.effect';

export const useDeleteCompany = () => {
  const { company } = useSharedData();

  const confirmCompanyRemoval = () => {
    notifyConfirm({
      title: 'Delete company',
      description: `Are you sure you want to delete company: ${company?.name}? `,
      acceptText: 'Delete',
      accepted: () => deleteCompany(company?.id as number),
      acceptBtnStyles: 'text-error-color',
      icon: LibraryIcon,
    });
  };

  const deleteCompany = (id: number) => {
    Inertia.delete(`/companies`, {
      preserveScroll: true,
      errorBag: 'companies',
    });
  };

  return { confirmCompanyRemoval };
};
