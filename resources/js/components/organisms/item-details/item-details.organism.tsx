import React from 'react';
import { getRandomPlaceholderImage } from '../../../utils/placeholder-image.util';
import { DropdownMenuMolecule } from '../../molecules/dropdown-menu/dropdown-menu.molecule';
import { itemDetailsMenu } from '../../../enums/item-details-menu.enum';
import format from 'date-fns/format';
import { DateFormats } from '../../../enums/date-formats.enum';
import { ItemDetailsProps } from './item-details.props';
import { calculateStockPerStore } from '../../../utils/stock.util';
import { SimpleEmptyStateMolecule } from '../../molecules/simple-empty-state/simple-empty-state.molecule';
import { ClipboardListIcon, TagIcon } from '@heroicons/react/solid';
import { Inertia } from '@inertiajs/inertia';

export const ItemDetailsOrganism = ({ item }: ItemDetailsProps) => {
  const stockPerStore = calculateStockPerStore(item);

  return (
    <section>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={getRandomPlaceholderImage()}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Item details and assignments</p>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0 flex">
              <DropdownMenuMolecule actions={itemDetailsMenu(item)} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Code</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.code}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.price.toFixed(2)} PLN</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.description}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Created</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {format(new Date(item.created_at), DateFormats.FULL)}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Updated</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {format(new Date(item.updated_at), DateFormats.FULL)}
              </dd>
            </div>
          </dl>
        </div>
        <div className="max-w-5xl mx-auto px-4 pb-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-500">Tags</h2>
          <ul role="list" className="mt-2 leading-8 space-x-3">
            {item.tags?.length ? (
              item.tags?.map((tag) => (
                <li className="inline">
                  <span className="inline-flex rounded-full items-center py-2 pl-3.5 pr-3.5 text-sm font-medium bg-primary-color text-white">
                    {tag.tag.name}
                    <button
                      onClick={() =>
                        Inertia.delete(`/tags/${tag.tag_id}/detach/items/${tag.item_id}`)
                      }
                      type="button"
                      className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-white hover:bg-secondary-color hover:text-primary-color focus:outline-none focus:bg-secondary-color focus:text-white"
                    >
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                </li>
              ))
            ) : (
              <SimpleEmptyStateMolecule
                title="No tags"
                text="This item does not have any tags attached yet"
                icon={TagIcon}
              />
            )}
          </ul>
        </div>
        <div className="max-w-5xl mx-auto px-4 pb-8 sm:px-6">
          <h2 className="text-sm font-medium text-gray-500">Stores</h2>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.keys(stockPerStore).length ? (
              Object.keys(stockPerStore).map((store) => (
                <div
                  key={store}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-primary-color focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={getRandomPlaceholderImage()}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">{store}</p>
                      <p className="text-sm text-gray-500 truncate">{stockPerStore[store]} items</p>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2">
                <SimpleEmptyStateMolecule
                  title="No stock"
                  text="This item was not added to any store yet"
                  icon={ClipboardListIcon}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
