import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useCreateCheckoutForm } from './create-stock-form.effect';
import { CreateCheckoutFormProp } from './create-checkout-form.props';
import { InputMolecule } from '../../atoms/input/input.molecule';

export const CreateCheckoutFormOrganism = ({ stock }: CreateCheckoutFormProp) => {
  const { setData, data, processing, errors, handleSubmit } = useCreateCheckoutForm(stock);

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Checkout item</h2>
              <p className="mt-1 text">Please fill form below to checkout item.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Store"
                  onChange={() => {}}
                  value={stock.store.name}
                  name="store"
                  disabled={true}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Item"
                  onChange={() => {}}
                  value={stock.item.name}
                  name="item"
                  disabled={true}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Quantity"
                  onChange={(value) => setData('quantity', value)}
                  value={data.quantity}
                  name="quantity"
                  errors={Boolean(errors.quantity)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.quantity}</p>
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
                  onClick={() => Inertia.get('/stock')}
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
