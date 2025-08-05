import React from 'react';
import { CheckoutsProps } from './checkouts.props';
import { PaginationBoxMolecule } from '../../molecules/pagination-box/pagination-box.molecule';
import { ColorSwatchIcon } from '@heroicons/react/outline';
import format from 'date-fns/format';
import { DateFormats } from '../../../enums/date-formats.enum';
import { useGiveBackItem } from './give-back-item.effect';
import { CheckoutFiltersOrganism } from "../checkouts-filters/checkout-filters.organism";

export const CheckoutsOrganism = ({ items }: CheckoutsProps) => {
  const { confirmGivingBackItem } = useGiveBackItem();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Checkouts</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <CheckoutFiltersOrganism />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="table-th" />
                    <th className="table-th">Store</th>
                    <th className="table-th">Item</th>
                    <th className="table-th">Quantity</th>
                    <th className="table-th">User</th>
                    <th className="table-th">Returned</th>
                    <th className="table-th">From</th>
                    <th className="table-th">To</th>
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map((checkout) => (
                    <tr key={checkout.id} className="bg-white">
                      <td className="table-td">
                        <ColorSwatchIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{checkout.store.name}</td>
                      <td className="table-td">{checkout.item.name}</td>
                      <td className="table-td">{checkout.quantity}</td>
                      <td className="table-td">{checkout.user.name}</td>
                      <td className="table-td">{checkout.date_to ? 'Yes' : 'No'}</td>
                      <td className="table-td">
                        <time dateTime={checkout.date_from}>
                          {format(new Date(checkout.date_from), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <time dateTime={checkout.date_to}>
                          {checkout.date_to
                            ? format(new Date(checkout.date_to), DateFormats.FULL)
                            : '-'}
                        </time>
                      </td>
                      <td className="table-td">
                        {!checkout.date_to && (
                          <a
                            onClick={() => confirmGivingBackItem(checkout)}
                            className="cursor-pointer text-error-color hover:text-error-color-dark"
                          >
                            Give back
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PaginationBoxMolecule paginator={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
