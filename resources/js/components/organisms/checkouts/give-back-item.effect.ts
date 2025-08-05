import { notifyConfirm } from '../../../utils/notify.util';
import { ColorSwatchIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { ItemCheckout } from '../../../models/item-checkout';

export const useGiveBackItem = () => {
  const confirmGivingBackItem = (checkout: ItemCheckout) => {
    notifyConfirm({
      title: 'Return item',
      description: `Are you sure you want to return item: ${checkout.item.name}? `,
      acceptText: 'Return',
      accepted: () => returnItem(checkout.id),
      acceptBtnStyles: 'text-error-color',
      icon: ColorSwatchIcon,
    });
  };

  const returnItem = (id: number) => {
    Inertia.post(`/checkouts/${id}/return`, {
      preserveScroll: true,
      errorBag: 'checkouts',
    });
  };

  return { confirmGivingBackItem };
};
