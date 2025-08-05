import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useMoveStockForm } from './edit-stock-form.effect';
import { MoveStockFormProp } from './move-stock-form.props';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { SelectMolecule } from '../../atoms/select/select.molecule';

export const MoveStockFormOrganism = ({ stock, stores, items }: MoveStockFormProp) => {
  const { setData, data, processing, errors, handleSubmit } = useMoveStockForm(stock);

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Move stock</h2>
              <p className="mt-1 text">
                Please update form below to move existing stock between stores.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={stores.map((store) => ({ label: store.name, value: String(store.id) }))}
                  label="Source store"
                  onChange={() => {}}
                  value={String(stock.store_id)}
                  name="source_store_id"
                  disabled={true}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={items.map((item) => ({ label: item.name, value: String(item.id) }))}
                  label="Item"
                  onChange={() => {}}
                  value={String(stock.item_id)}
                  name="item_id"
                  disabled={true}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={stores.map((store) => ({ label: store.name, value: String(store.id) }))}
                  label="Target store"
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
                  {processing ? 'Updating...' : 'Update'}
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
