import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';
import { useAttachTagForm } from './attach-tag-form.effect';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { AttachTagFormProp } from './attach-tag-form.props';
import { InputMolecule } from '../../atoms/input/input.molecule';

export const AttachTagFormOrganism = ({ tags, item }: AttachTagFormProp) => {
  const { setData, data, processing, errors, handleSubmit } = useAttachTagForm(item);

  return (
    <section aria-labelledby="section-1-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <form>
          <div className="p-8">
            <div>
              <h2 className="header">Attach tag</h2>
              <p className="mt-1 text">Please fill form below to attach tag to item.</p>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <InputMolecule
                  label="Item"
                  onChange={() => {}}
                  value={item.name}
                  name="item"
                  disabled={true}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <SelectMolecule
                  options={tags.map((tag) => ({
                    label: tag.name,
                    value: String(tag.id),
                  }))}
                  label="Item"
                  onChange={(value) => setData('tag_id', value)}
                  value={data.tag_id}
                  name="tag_id"
                  errors={Boolean(errors.tag_id)}
                />
                <p className="mt-1 text-error-color text-sm">{errors.tag_id}</p>
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
                  {processing ? 'Attaching...' : 'Attach'}
                </ButtonMolecule>
                <ButtonMolecule
                  type="button"
                  onClick={() => Inertia.get('/item/' + item.id)}
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
