import { RouteMenuItem } from '../models/route-menu-item';

export const headerUserMenu: RouteMenuItem[] = [
  { title: 'Your Profile', href: '/profile', method: 'GET' },
  //{ title: 'Settings', href: '/settings', method: 'GET' },
  { title: 'Logout', href: '/logout', method: 'POST' },
];
