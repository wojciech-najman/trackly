import React from 'react';
import { StoresProps } from './stores.props';
import { PaginationBoxMolecule } from '../../molecules/pagination-box/pagination-box.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { Inertia } from '@inertiajs/inertia';
import { InboxInIcon } from '@heroicons/react/outline';
import format from 'date-fns/format';
import { DateFormats } from '../../../enums/date-formats.enum';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useDeleteStore } from './delete-store.effect';
import { StoresFiltersOrganism } from '../stores-filters/stores-filters.organism';

export const StoresOrganism = ({ items }: StoresProps) => {
  const { confirmStoreRemoval } = useDeleteStore();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Stores</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <StoresFiltersOrganism />
            <ButtonMolecule
              onClick={() => Inertia.get('/stores/create')}
              className="btn-primary ml-4"
            >
              Create Store
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
                    <th className="table-th">Created</th>
                    <th className="table-th">Updated</th>
                    <th className="table-th" />
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map((store) => (
                    <tr key={store.id} className="bg-white">
                      <td className="table-td">
                        <InboxInIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{store.id}</td>
                      <td className="table-td">{store.name}</td>
                      <td className="table-td">{store.description}</td>
                      <td className="table-td">
                        <time dateTime={store.created_at}>
                          {format(new Date(store.created_at), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <time dateTime={store.updated_at}>
                          {format(new Date(store.updated_at), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/stores/${store.id}/edit`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <a
                          onClick={() => confirmStoreRemoval(store)}
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
