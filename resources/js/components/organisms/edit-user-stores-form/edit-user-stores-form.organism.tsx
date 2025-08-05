import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { XIcon } from '@heroicons/react/outline';
import { useAttachStoreForm } from './attach-store-form.effect';
import { Inertia } from '@inertiajs/inertia';
import { EditUserStoresFormProps } from './edit-user-stores-form.props';
import { useDetachStoreForm } from './detach-store-form.effect';
import { ToggleGroup } from '../../molecules/toggle-group/toggle-group';

export const EditUserStoresFormOrganism = (props: EditUserStoresFormProps) => {
  const { handleSubmit: attachStore } = useAttachStoreForm();

  const { handleSubmit: detachStore } = useDetachStoreForm();

  return (
    <section>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Edit user stores</h2>
              <p className="mt-1 text">
                Please update form below to decide to which stores user should have access within
                company.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="w-full sm:w-80">
                {props.stores.map((store) => (
                  <ToggleGroup
                    title={store.name}
                    description={store.description}
                    checked={Boolean(
                      props.storeUsers.find((storeUser) => storeUser.store_id === store.id),
                    )}
                    onChange={(checked) =>
                      checked ? attachStore(store, props.user) : detachStore(store, props.user)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="px-8 py-4 line-separator bg-gray-50">
            <div className="divide-y divide-gray-200">
              <div className="flex justify-end">
                <ButtonMolecule
                  type="button"
                  onClick={() => Inertia.get('/users')}
                  className="ml-5 btn-white"
                >
                  <XIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Close
                </ButtonMolecule>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
