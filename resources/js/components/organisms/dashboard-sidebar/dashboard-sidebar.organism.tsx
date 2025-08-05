import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { classNames } from '../../../utils/class-names.util';
import { DashboardSidebarProps } from './dashboard-sidebar.props';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { navigationMenu } from '../../../enums/navigation-menu.enum';
import { secondaryNavigationMenu } from '../../../enums/secondary-navigation-menu.enum';
import { getRandomPlaceholderImage } from '../../../utils/placeholder-image.util';
import { useSharedData } from '../../../hooks/shared-data.effect';
import { truncateText } from '../../../utils/text.utils';
import { useIsAdmin } from '../../../hooks/is-admin.effect';

export const DashboardSidebarOrganism = (props: DashboardSidebarProps) => {
  const url = usePage().url;

  const sharedData = useSharedData();

  const isAdmin = useIsAdmin();

  return (
    <>
      <Transition.Root show={props.opened} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={() => props.setOpened(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => props.setOpened(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {navigationMenu(
                    sharedData.storesCount,
                    sharedData.itemsCount,
                    sharedData.tagsCount,
                  ).map(
                    (item) =>
                      (!item.onlyAdmin || isAdmin) && (
                        <InertiaLink
                          key={item.title}
                          href={item.href}
                          method={item.method}
                          className={classNames(
                            item.href === url
                              ? 'bg-cyan-800 text-white'
                              : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                          )}
                        >
                          <item.icon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          <span className="flex-1">{item.title}</span>
                          {typeof item.counter !== 'undefined' && (
                            <span
                              className={classNames(
                                item.href === url ? 'bg-cyan-600' : 'bg-cyan-800',
                                'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
                              )}
                            >
                              {item.counter}
                            </span>
                          )}
                        </InertiaLink>
                      ),
                  )}
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigationMenu.map(
                      (item) =>
                        (!item.onlyAdmin || isAdmin) && (
                          <InertiaLink
                            key={item.title}
                            href={item.href}
                            className={classNames(
                              item.href === url
                                ? 'bg-cyan-800 text-white'
                                : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                            )}
                          >
                            <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                            {item.title}
                          </InertiaLink>
                        ),
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true" />
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
          <nav
            className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="px-2 space-y-1">
              {navigationMenu(
                sharedData.storesCount,
                sharedData.itemsCount,
                sharedData.tagsCount,
              ).map(
                (item) =>
                  (!item.onlyAdmin || isAdmin) && (
                    <InertiaLink
                      key={item.title}
                      href={item.href}
                      method={item.method}
                      className={classNames(
                        item.href === url
                          ? 'bg-cyan-800 text-white'
                          : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.title}</span>
                      {typeof item.counter !== 'undefined' && (
                        <span
                          className={classNames(
                            item.href === url ? 'bg-cyan-600' : 'bg-cyan-800',
                            'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
                          )}
                        >
                          {item.counter}
                        </span>
                      )}
                    </InertiaLink>
                  ),
              )}
            </div>
            <div className="mt-6 pt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigationMenu.map(
                  (item) =>
                    (!item.onlyAdmin || isAdmin) && (
                      <InertiaLink
                        key={item.title}
                        href={item.href}
                        className={classNames(
                          item.href === url
                            ? 'bg-cyan-800 text-white'
                            : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        )}
                      >
                        <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                        {item.title}
                      </InertiaLink>
                    ),
                )}
              </div>
            </div>
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-cyan-800 p-4">
          <InertiaLink href="/company/switch" className="flex-shrink-0 w-full block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={getRandomPlaceholderImage()}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-cyan-200">
                  {truncateText(sharedData.company?.name ?? '')}
                </p>
                <p className="text-xs font-medium text-white">Change</p>
              </div>
            </div>
          </InertiaLink>
        </div>
      </div>
    </>
  );
};
