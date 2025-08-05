import { RouteMenuItem } from '../models/route-menu-item';
import { UserCircleIcon, CogIcon, LibraryIcon } from '@heroicons/react/outline';

export const secondaryNavigationMenu: RouteMenuItem[] = [
  { title: 'Company', href: '/company/edit', method: 'GET', icon: LibraryIcon, onlyAdmin: true },
  { title: 'Profile', href: '/profile', method: 'GET', icon: UserCircleIcon },
  //{ title: 'Settings', href: '/settings', method: 'GET', icon: CogIcon },
];
