import React from 'react';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon } from '@heroicons/react/outline';
import { AccountFormProps } from './account-form.props';
import { useAccountForm } from './account-form.effect';

export const AccountFormOrganism = (props: AccountFormProps) => {
  const { setData, data, errors, processing, handleSubmit } = useAccountForm(props.user);

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form action="#" method="POST">
          <div className="p-8">
            <div>
              <h2 className="header">My Account</h2>
              <p className="mt-1 text">These are your account details. You can edit them here.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Name"
                  onChange={(value) => setData('name', value)}
                  value={data.name}
                  name="name"
                  errors={Boolean(errors.name)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.name}</p>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  type="email"
                  label="Email"
                  onChange={(value) => setData('email', value)}
                  value={data.email}
                  name="email"
                  errors={Boolean(errors.email)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.email}</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-4 line-separator bg-gray-50">
            <div className="divide-y divide-gray-200">
              <div className="flex justify-end">
                <ButtonMolecule
                  disabled={processing}
                  onClick={handleSubmit}
                  className="ml-5 btn-primary"
                >
                  <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  {processing ? 'Saving...' : 'Save'}
                </ButtonMolecule>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
