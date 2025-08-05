import React from 'react';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { useCreateUserForm } from './create-user-form.effect';
import { Inertia } from '@inertiajs/inertia';

export const CreateUserFormOrganism = () => {
  const { setData, data, errors, processing, handleSubmit } = useCreateUserForm();

  return (
    <section>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Create user</h2>
              <p className="mt-1 text">Please fill form below to create new user.</p>
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
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  type="password"
                  label="Password"
                  onChange={(value) => setData('password', value)}
                  value={data.password}
                  name="password"
                  errors={Boolean(errors.password)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.password}</p>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  type="password"
                  label="Repeat password"
                  onChange={(value) => setData('passwordConfirm', value)}
                  value={data.passwordConfirm}
                  name="passwordConfirm"
                  errors={Boolean(errors.passwordConfirm)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.passwordConfirm}</p>
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
                <ButtonMolecule
                  type="button"
                  onClick={() => Inertia.get('/users')}
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
