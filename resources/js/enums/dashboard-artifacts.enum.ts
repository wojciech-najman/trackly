import { DatabaseIcon, InboxInIcon, TagIcon } from '@heroicons/react/outline';

export const dashboardArtifacts = (storesCount, itemsCount, tagsCount) => {
  return [
    {
      name: 'Stores',
      href: '/stores',
      icon: InboxInIcon,
      text: storesCount,
    },
    {
      name: 'Items',
      href: '/items',
      icon: DatabaseIcon,
      text: itemsCount,
    },
    {
      name: 'Tags',
      href: '/tags',
      icon: TagIcon,
      text: tagsCount,
    },
  ];
};
