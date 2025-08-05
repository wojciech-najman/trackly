import { RouteMenuItem } from '../models/route-menu-item';
import {
  DatabaseIcon,
  HomeIcon,
  InboxInIcon,
  TagIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClipboardListIcon,
  ColorSwatchIcon,
} from '@heroicons/react/outline';

export const navigationMenu: (
  storesCount: number,
  itemsCount: number,
  tagsCount: number,
) => RouteMenuItem[] = (storesCount, itemsCount, tagsCount) => {
  return [
    { title: 'Home', href: '/', method: 'GET', icon: HomeIcon },
    { title: 'Stores', href: '/stores', method: 'GET', icon: InboxInIcon, counter: storesCount },
    { title: 'Items', href: '/items', method: 'GET', icon: DatabaseIcon, counter: itemsCount },
    { title: 'Tags', href: '/tags', method: 'GET', icon: TagIcon, counter: tagsCount },
    { title: 'Stock', href: '/stock', method: 'GET', icon: ClipboardListIcon },
    { title: 'Checkouts', href: '/checkouts', method: 'GET', icon: ColorSwatchIcon },
    { title: 'Users', href: '/users', method: 'GET', icon: UserGroupIcon, onlyAdmin: true },
    { title: 'Activity', href: '/activity', method: 'GET', icon: ChartBarIcon },
  ];
};
