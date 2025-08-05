import { CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ChatAlt2Icon } from '@heroicons/react/solid';
import React from 'react';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { ItemNotesProps } from './item-notes.props';
import { SimpleEmptyStateMolecule } from '../../molecules/simple-empty-state/simple-empty-state.molecule';
import { useCreateItemNoteForm } from './create-item-note-form.effect';
import { TextareaMolecule } from '../../atoms/textarea/textarea.molecule';
import { ItemNoteMolecule } from '../../molecules/item-note/item-note.molecule';

export const ItemNotesOrganism = ({ notes, itemId }: ItemNotesProps) => {
  const { setData, data, errors, processing, handleSubmit } = useCreateItemNoteForm(itemId);

  return (
    <section aria-labelledby="notes-title">
      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="notes-title" className="text-lg font-medium text-gray-900">
              Notes
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            {notes.length ? (
              <ul role="list" className="space-y-8">
                {notes.map((note) => (
                  <ItemNoteMolecule note={note} />
                ))}
              </ul>
            ) : (
              <SimpleEmptyStateMolecule
                title="No notes"
                text="Add your first note to this item."
                icon={ChatAlt2Icon}
              />
            )}
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="/images/default-avatar.png" alt="" />
            </div>
            <div className="min-w-0 flex-1">
              <form>
                <div className="col-span-12 sm:col-span-6">
                  <TextareaMolecule
                    label="Description"
                    onChange={(value) => setData('note', value)}
                    value={data.note}
                    name="description"
                    errors={Boolean(errors.note)}
                  />
                  <p className="mt-1 text-error-color text-sm">{errors.note}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <a
                    href="#"
                    className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                  >
                    <QuestionMarkCircleIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span>Do not put HTML tags inside comments.</span>
                  </a>
                  <ButtonMolecule
                    disabled={processing}
                    onClick={handleSubmit}
                    className="ml-5 btn-primary"
                  >
                    <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    {processing ? 'Saving comment...' : 'Comment'}
                  </ButtonMolecule>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
