import React from 'react';
import { UsersProps } from './users.props';
import { PaginationBoxMolecule } from '../../molecules/pagination-box/pagination-box.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { Inertia } from '@inertiajs/inertia';
import { UserGroupIcon } from '@heroicons/react/outline';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useDeleteUser } from './delete-user.effect';
import { useSharedData } from '../../../hooks/shared-data.effect';
import { UsersFiltersOrganism } from '../users-filters/users-filters.organism';

export const UsersOrganism = ({ items }: UsersProps) => {
  const { confirmUserRemoval } = useDeleteUser();

  const { user: loggedUser } = useSharedData();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Users</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <UsersFiltersOrganism />
            <ButtonMolecule
              onClick={() => Inertia.get('/company/users/invite')}
              className="btn-white ml-4"
            >
              Invite User
            </ButtonMolecule>
            <ButtonMolecule
              onClick={() => Inertia.get('/users/create')}
              className="btn-primary ml-4"
            >
              Create User
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
                    <th className="table-th">Email</th>
                    <th className="table-th" />
                    <th className="table-th" />
                    <th className="table-th" />
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map(({ user }) => (
                    <tr key={user.id} className="bg-white">
                      <td className="table-td">
                        <UserGroupIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{user.id}</td>
                      <td className="table-td">{user.name}</td>
                      <td className="table-td">{user.email}</td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/users/${user.id}/edit`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/users/${user.id}/stores`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit stores
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        {loggedUser.id !== user.id && (
                          <InertiaLink
                            href={`/users/${user.id}/role/edit`}
                            className="text-primary-color hover:text-primary-color-dark"
                          >
                            Edit role
                          </InertiaLink>
                        )}
                      </td>
                      <td className="table-td">
                        {loggedUser.id !== user.id && (
                          <a
                            onClick={() => confirmUserRemoval(user)}
                            className="cursor-pointer text-error-color hover:text-error-color-dark"
                          >
                            Delete
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
