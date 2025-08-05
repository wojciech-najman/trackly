import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { classNames } from '../../../utils/class-names.util';
import { DropdownMenuProps } from './dropdown-menu.props';

export const DropdownMenuMolecule = ({ actions }: DropdownMenuProps) => {
  return (
    <Menu as="div" className="relative z-30 inline-block text-left">
      <div>
        <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
          <span className="sr-only">Open options</span>
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {actions.map((action) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={action.action}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full flex px-4 py-2 text-sm',
                    )}
                  >
                    {action.icon && (
                      <action.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    )}
                    <span>{action.title}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
