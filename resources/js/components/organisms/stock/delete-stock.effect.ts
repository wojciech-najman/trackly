import { notifyConfirm } from '../../../utils/notify.util';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { Stock } from '../../../models/stock';

export const useDeleteStock = () => {
  const confirmStockRemoval = (stock: Stock) => {
    notifyConfirm({
      title: 'Delete stock',
      description: `Are you sure you want to delete this stock? `,
      acceptText: 'Delete',
      accepted: () => deleteStock(stock.id),
      acceptBtnStyles: 'text-error-color',
      icon: ClipboardListIcon,
    });
  };

  const deleteStock = (id: number) => {
    Inertia.delete(`/stock/${id}`, {
      preserveScroll: true,
      errorBag: 'stock',
    });
  };

  return { confirmStockRemoval };
};
