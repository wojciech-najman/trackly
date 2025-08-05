import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useSwitchCompanyForm } from './switch-company-form.effect';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { SwitchCompanyProps } from './switch-company.props';

export const SwitchCompanyFormOrganism = (props: SwitchCompanyProps) => {
  const { setData, data, processing, errors, handleSubmit } = useSwitchCompanyForm();

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Switch company</h2>
              <p className="mt-1 text">Please select company from list below to switch your context.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={props.userCompanies.map((userCompany) => ({
                    label: userCompany.company.name,
                    value: String(userCompany.company_id),
                  }))}
                  label="Name"
                  onChange={(value) => setData('company_id', value)}
                  value={data.company_id}
                  name="name"
                  errors={Boolean(errors.company_id)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.company_id}</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 line-separator bg-gray-50">
            <div className="divide-y divide-gray-200">
              <div className="flex justify-end">
                <ButtonMolecule
                  disabled={processing || !data.company_id}
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
