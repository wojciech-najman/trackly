import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { CheckboxMolecule } from '../../atoms/checkbox/checkbox.molecule';
import { useLoginForm } from './login-form.effect';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useSharedData } from '../../../hooks/shared-data.effect';
import { ErrorAlertMolecule } from '../../molecules/error-alert/error-alert.molecule';

export const LoginBoxOrganism = () => {
  const { setData, data, processing, errors, handleSubmit } = useLoginForm();
  const { errors: flashErrors } = useSharedData();

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <h2 className="mt-6 header-3xl">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <InertiaLink
            href="/register"
            className="font-medium text-primary-color hover:text-primary-color-dark"
          >
            create new account
          </InertiaLink>
        </p>
      </div>
      <div className="mt-8">
        <div>
          <div>
            <div className="mt-1">
              <div>
                <p className="text mb-2">Sign in with:</p>
                <a
                  href="/login/google"
                  className="w-full inline-flex justify-center py-1 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <img
                    className="w-6 h-6"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCBoZWlnaHQ9IjI0IiBpZD0iQXJ0Ym9hcmQyIiBzdHlsZT0iZmlsbDpub25lOyIgd2lkdGg9IjI0IiB4PSIwIiB5PSIwIi8+PGc+PHBhdGggZD0iTTQuOTMsNC45M2MxLjgxLC0xLjgxIDQuMzEsLTIuOTMgNy4wNywtMi45M2MyLjc2LDAgNS4yNiwxLjEyIDcuMDcsMi45M2wtMi44MjgsMi44MjhjLTEuMDg2LC0xLjA4NiAtMi41ODYsLTEuNzU4IC00LjI0MiwtMS43NThjLTEuNjU2LDAgLTMuMTU2LDAuNjcyIC00LjI0MiwxLjc1OGwtMi44MjgsLTIuODI4WiIgc3R5bGU9ImZpbGw6I2ViNDEzNDsiLz48cGF0aCBkPSJNMTYuMjQyLDE2LjI0MmwyLjgyOCwyLjgyOGMtMS44MSwxLjgxIC00LjMxLDIuOTMgLTcuMDcsMi45M2MtMi43NiwwIC01LjI2LC0xLjEyIC03LjA3LC0yLjkzbDIuODI4LC0yLjgyOGMxLjA4NiwxLjA4NiAyLjU4NiwxLjc1OCA0LjI0MiwxLjc1OGMxLjY1NiwwIDMuMTU2LC0wLjY3MiA0LjI0MiwtMS43NThaIiBzdHlsZT0iZmlsbDojMzRhYTUxOyIvPjxwYXRoIGQ9Ik00LjkzLDQuOTNsMi44MjgsMi44MjhjLTEuMDg2LDEuMDg2IC0xLjc1OCwyLjU4NiAtMS43NTgsNC4yNDJjMCwxLjY1NiAwLjY3MiwzLjE1NiAxLjc1OCw0LjI0MmwtMi44MjgsMi44MjhjLTEuODEsLTEuODEgLTIuOTMsLTQuMzEgLTIuOTMsLTcuMDdjMCwtMi43NiAxLjEyLC01LjI2IDIuOTMsLTcuMDdaIiBzdHlsZT0iZmlsbDojZmJiZTA0OyIvPjxwYXRoIGQ9Ik0xMiwxMGw5LjgsMGMwLjEzMSwwLjY0NiAwLjIsMS4zMTUgMC4yLDJjMCwwLjY4NSAtMC4wNjksMS4zNTQgLTAuMiwyYy0wLjM5OSwxLjk1OCAtMS4zNjksMy43MDkgLTIuNzMsNS4wN2wtMi44MjgsLTIuODI4YzAuNjI2LC0wLjYyNiAxLjExNSwtMS4zOSAxLjQxNiwtMi4yNDJsLTUuNjU4LDBsMCwtNFoiIHN0eWxlPSJmaWxsOiM0MTg2Zjc7Ii8+PC9nPjwvc3ZnPg=="
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <form className="space-y-6">
            {flashErrors.error && (
              <div>
                <ErrorAlertMolecule title={flashErrors.error} />
              </div>
            )}
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
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckboxMolecule
                  name="remember_me"
                  label="Remember me"
                  value={false}
                  onChange={() => {}}
                />
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-color hover:text-primary-color-dark"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <ButtonMolecule
                disabled={processing}
                onClick={handleSubmit}
                className="w-full btn-primary"
              >
                {processing ? 'Signing in...' : 'Sign in'}
              </ButtonMolecule>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
