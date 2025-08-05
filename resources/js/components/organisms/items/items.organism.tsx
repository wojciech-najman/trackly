import React from 'react';
import { ItemsProps } from './items.props';
import { PaginationBoxMolecule } from '../../molecules/pagination-box/pagination-box.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { Inertia } from '@inertiajs/inertia';
import { DatabaseIcon } from '@heroicons/react/outline';
import format from 'date-fns/format';
import { DateFormats } from '../../../enums/date-formats.enum';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useDeleteItem } from './delete-item.effect';
import { ItemsFiltersOrganism } from '../items-filters/items-filters.organism';

export const ItemsOrganism = ({ items, tags }: ItemsProps) => {
  const { confirmItemRemoval } = useDeleteItem();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Items</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <ItemsFiltersOrganism tags={tags} />
            <ButtonMolecule
              onClick={() => Inertia.get('/items/create')}
              className="btn-primary ml-4"
            >
              Create Item
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
                    <th className="table-th">ID</th>
                    <th className="table-th">Name</th>
                    <th className="table-th">Description</th>
                    <th className="table-th">Code</th>
                    <th className="table-th">Price</th>
                    <th className="table-th">Created</th>
                    <th className="table-th" />
                    <th className="table-th" />
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map((item) => (
                    <tr key={item.id} className="bg-white">
                      <td className="table-td">
                        <DatabaseIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{item.id}</td>
                      <td className="table-td">{item.name}</td>
                      <td className="table-td">{item.description}</td>
                      <td className="table-td">{item.code}</td>
                      <td className="table-td">{item.price}</td>
                      <td className="table-td">
                        <time dateTime={item.created_at}>
                          {format(new Date(item.created_at), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/items/${item.id}`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Show
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/items/${item.id}/edit`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <a
                          onClick={() => confirmItemRemoval(item)}
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
