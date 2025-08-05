import React from 'react';
import { InputMolecule } from '../../atoms/input/input.molecule';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { EditItemFormProps } from './edit-item-form.props';
import { TextareaMolecule } from '../../atoms/textarea/textarea.molecule';
import { useEditItemForm } from './edit-item-form.effect';

export const EditItemFormOrganism = (props: EditItemFormProps) => {
  const { setData, data, processing, errors, handleSubmit } = useEditItemForm(props.item);

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Edit item</h2>
              <p className="mt-1 text">Please update form below to modify existing item.</p>
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
                  label="Code"
                  onChange={(value) => setData('code', value)}
                  value={data.code}
                  name="code"
                  errors={Boolean(errors.code)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.code}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Price"
                  onChange={(value) => setData('price', Number(value))}
                  value={String(data.price)}
                  name="price"
                  errors={Boolean(errors.price)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.price}</p>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <TextareaMolecule
                  label="Description"
                  onChange={(value) => setData('description', value)}
                  value={data.description}
                  name="description"
                  errors={Boolean(errors.description)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.description}</p>
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
                  onClick={() => Inertia.get('/items')}
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
