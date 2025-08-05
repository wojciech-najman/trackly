import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { useRegisterForm } from './register-form.effect';
import { InertiaLink } from '@inertiajs/inertia-react';

export const RegisterBoxOrganism = () => {
  const { setData, data, processing, errors, handleSubmit } = useRegisterForm();

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img
          className="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 header-3xl">Create new account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <InertiaLink
            href="/login"
            className="font-medium text-primary-color hover:text-primary-color-dark"
          >
            sign in to existing account
          </InertiaLink>
        </p>
      </div>
      <div className="mt-8">
        <div className="mt-6">
          <form className="space-y-6">
            <div>
              <InputMolecule
                label="Name"
                onChange={(value) => setData('name', value)}
                value={data.name}
                name="name"
                errors={Boolean(errors.name)}
              />
              <p className="mt-1 text-error-color text-sm">{errors.name}</p>
            </div>
            <div>
              <InputMolecule
                type="email"
                label="Email address"
                onChange={(value) => setData('email', value)}
                value={data.email}
                name="email"
                errors={Boolean(errors.email)}
              />
              <p className="mt-1 text-error-color text-sm">{errors.email}</p>
            </div>
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
              <InputMolecule
                type="password"
                label="Repeat password"
                onChange={(value) => setData('password_confirmation', value)}
                value={data.password_confirmation}
                name="password_confirmation"
                errors={Boolean(errors.password_confirmation)}
              />
              <p className="mt-1 text-error-color text-sm">{errors.password_confirmation}</p>
            </div>
            <div>
              <ButtonMolecule
                disabled={processing}
                onClick={handleSubmit}
                className="w-full btn-primary"
              >
                {processing ? 'Signing up...' : 'Sign up'}
              </ButtonMolecule>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
