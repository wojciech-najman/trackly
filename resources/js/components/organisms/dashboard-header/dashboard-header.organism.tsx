import React, { Fragment } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../../utils/class-names.util";
import { DashboardHeaderProps } from "./dashboard-header.props";
import { InertiaLink } from "@inertiajs/inertia-react";
import { headerUserMenu } from "../../../enums/header-user-menu.enum";
import { useSharedData } from "../../../hooks/shared-data.effect";

export const DashboardHeaderOrganism = (props: DashboardHeaderProps) => {
  const { user } = useSharedData();

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => props.openSidebar()}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                name="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/images/default-avatar.png"
                  alt=""
                />
                <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                  <span className="sr-only">Open user menu for </span>
                  {user.name}
                </span>
                <ChevronDownIcon
                  className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {headerUserMenu.map((item) => (
                  <Menu.Item key={item.title}>
                    {({ active }) => (
                      <InertiaLink
                        as="button"
                        href={item.href}
                        method={item.method}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'w-full text-left block py-2 px-4 text-sm text-text-dark',
                        )}
                      >
                        {item.title}
                      </InertiaLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
