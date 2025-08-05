import React from 'react';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { useEditRoleAccountForm } from './edit-user-account-form.effect';
import { Inertia } from '@inertiajs/inertia';
import { EditUserRoleFormProps } from './edit-user-role-form.props';

export const EditUserRoleFormOrganism = (props: EditUserRoleFormProps) => {
  const { setData, data, errors, processing, handleSubmit } = useEditRoleAccountForm(
    props.role,
    props.user,
  );

  return (
    <section>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Edit user role</h2>
              <p className="mt-1 text">Please update form below to change user company role.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={props.roles.map((role) => ({
                    label: role.name,
                    value: String(role.id),
                  }))}
                  label="Email"
                  onChange={(value) => setData('role', value)}
                  value={data.role}
                  name="email"
                  errors={Boolean(errors.role)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.role}</p>
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
