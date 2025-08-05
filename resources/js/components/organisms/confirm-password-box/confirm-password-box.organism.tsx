import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { useConfirmPasswordForm } from './confirm-password-form.effect';

export const ConfirmPasswordBoxOrganism = () => {
  const { setData, data, processing, errors, handleSubmit } = useConfirmPasswordForm();

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img
          className="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 header-3xl">Confirm your password</h2>
        <p className="mt-4 text">
          This is secure area of the application. Please confirm your password before continuing.
        </p>
      </div>
      <div className="mt-4">
        <div className="mt-6">
          <form className="space-y-6">
            <div>
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
            <div>
              <ButtonMolecule
                disabled={processing}
                onClick={handleSubmit}
                className="w-full btn-primary"
              >
                {processing ? 'Confirming...' : 'Confirm'}
              </ButtonMolecule>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
