import React from 'react';
import { StockProps } from './stock.props';
import { PaginationBoxMolecule } from '../../molecules/pagination-box/pagination-box.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { Inertia } from '@inertiajs/inertia';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useDeleteStock } from './delete-stock.effect';
import { StockFiltersOrganism } from '../stock-filters/stock-filters.organism';

export const StockOrganism = ({ items, tags }: StockProps) => {
  const { confirmStockRemoval } = useDeleteStock();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Items</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <StockFiltersOrganism tags={tags} />
            <ButtonMolecule
              onClick={() => Inertia.get('/stock/create')}
              className="btn-primary ml-4"
            >
              Create Stock
            </ButtonMolecule>
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
                    <th className="table-th">Low Stock</th>
                    <th className="table-th" />
                    <th className="table-th" />
                    <th className="table-th" />
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map((stock) => (
                    <tr key={stock.id} className="bg-white">
                      <td className="table-td">
                        <ClipboardListIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{stock.store.name}</td>
                      <td className="table-td">{stock.item.name}</td>
                      <td className="table-td">{stock.quantity}</td>
                      <td className="table-td">{stock.low_stock}</td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/stock/${stock.id}/move`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Move
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/stock/${stock.id}/edit`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/checkouts/stock/${stock.id}/create`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Checkout
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <a
                          onClick={() => confirmStockRemoval(stock)}
                          className="cursor-pointer text-error-color hover:text-error-color-dark"
                        >
                          Delete
                        </a>
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
