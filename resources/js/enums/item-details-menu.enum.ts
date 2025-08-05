import { ActionMenuItem } from '../models/action-menu-item';
import { InboxInIcon, PencilAltIcon, TagIcon } from '@heroicons/react/solid';
import { Inertia } from '@inertiajs/inertia';
import { Item } from '../models/item';

export const itemDetailsMenu: (item: Item) => ActionMenuItem[] = (item: Item) => {
  return [
    {
      title: 'Add to store',
      action: () => {
        Inertia.visit(`/stock/create`);
      },
      icon: InboxInIcon,
    },
    {
      title: 'Edit item',
      action: () => {
        Inertia.visit(`/items/${item.id}/edit`);
      },
      icon: PencilAltIcon,
    },
    {
      title: 'Attach tag',
      action: () => {
        Inertia.visit(`/tags/attach/items/${item.id}`);
      },
      icon: TagIcon,
    },
  ];
};
