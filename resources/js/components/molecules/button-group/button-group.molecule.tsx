import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { classNames } from '../../../utils/class-names.util';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const items = [
  { name: 'Create item', href: '/items/create' },
  { name: 'Create tag', href: '/tags/create' },
  { name: 'Create stock', href: '/stock/create' },
  { name: 'Create company', href: '/company/create' },
];

export const ButtonGroupMolecule = () => {
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        onClick={() => Inertia.get('/stores/create')}
        type="button"
        className="btn-primary relative inline-flex items-center px-4 py-2 rounded-l-md bg-primary-color text-sm font-medium text-white hover:bg-primary-color-dark focus:z-10 focus:outline-none"
      >
        Create store
      </button>
      <Menu as="span" className="-ml-px relative block">
        <Menu.Button className="relative inline-flex items-center px-2 py-2 rounded-r-md border-l-[0.5px] border-white bg-primary-color text-sm font-medium text-white hover:bg-primary-color-dark focus:z-10 focus:outline-none">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <InertiaLink
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      {item.name}
                    </InertiaLink>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </span>
  );
};
