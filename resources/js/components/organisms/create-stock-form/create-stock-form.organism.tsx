import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useCreateStockForm } from './create-stock-form.effect';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { CreateStockFormProp } from './create-stock-form.props';
import { InputMolecule } from '../../atoms/input/input.molecule';

export const CreateStockFormOrganism = ({ stores, items }: CreateStockFormProp) => {
  const { setData, data, processing, errors, handleSubmit } = useCreateStockForm();

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Create stock</h2>
              <p className="mt-1 text">Please fill form below to create new stock.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={stores.map((store) => ({ label: store.name, value: String(store.id) }))}
                  label="Store"
                  onChange={(value) => setData('store_id', value)}
                  value={data.store_id}
                  name="store_id"
                  errors={Boolean(errors.store_id)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.store_id}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={items.map((item) => ({ label: item.name, value: String(item.id) }))}
                  label="Item"
                  onChange={(value) => setData('item_id', value)}
                  value={data.item_id}
                  name="item_id"
                  errors={Boolean(errors.item_id)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.item_id}</p>
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
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Low Stock"
                  onChange={(value) => setData('low_stock', value)}
                  value={data.low_stock}
                  name="low_stock"
                  errors={Boolean(errors.low_stock)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.low_stock}</p>
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
