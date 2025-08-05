import React from 'react';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import { Inertia } from '@inertiajs/inertia';
import { useEditCompanyForm } from './edit-company-form.effect';
import { useDeleteCompany } from './delete-company.effect';

export const EditCompanyFormOrganism = () => {
  const { setData, data, processing, errors, handleSubmit } = useEditCompanyForm();

  const { confirmCompanyRemoval } = useDeleteCompany();

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Edit company</h2>
              <p className="mt-1 text">Please update form below to modify existing company.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Name"
                  onChange={(value) => setData('name', value)}
                  value={String(data.name)}
                  name="name"
                  errors={Boolean(errors.name)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.name}</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 line-separator bg-gray-50">
            <div className="divide-y divide-gray-200">
              <div className="flex justify-end">
                <ButtonMolecule
                  type="button"
                  onClick={() => confirmCompanyRemoval()}
                  className="ml-5 btn-white"
                >
                  <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Delete company
                </ButtonMolecule>
                <ButtonMolecule
                  disabled={processing}
                  onClick={handleSubmit}
                  className="ml-5 btn-primary"
                >
                  <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  {processing ? 'Updating...' : 'Update'}
                </ButtonMolecule>
                <ButtonMolecule
                  type="button"
                  onClick={() => Inertia.get('/')}
                  className="ml-5 btn-white"
                >
                  <XIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Cancel
                </ButtonMolecule>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
