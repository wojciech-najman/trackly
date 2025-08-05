import React from 'react';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { useEditUserPasswordForm } from './edit-user-password-form.effect';
import { Inertia } from '@inertiajs/inertia';
import { EditUserPasswordFormProps } from './edit-user-password-form.props';

export const EditUserPasswordFormOrganism = (props: EditUserPasswordFormProps) => {
  const { setData, data, errors, processing, handleSubmit } = useEditUserPasswordForm(props.user);

  return (
    <section>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Change user password</h2>
              <p className="mt-1 text">Please fill form below to change user password.</p>
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
                  {processing ? 'Updating...' : 'Update'}
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
