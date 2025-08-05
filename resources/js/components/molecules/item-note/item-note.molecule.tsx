import { ItemNoteProps } from './item-note.props';
import { getRandomPlaceholderImage } from '../../../utils/placeholder-image.util';
import format from 'date-fns/format';
import { DateFormats } from '../../../enums/date-formats.enum';
import React, { useEffect, useRef, useState } from 'react';
import { useDeleteItemNote } from './delete-item-note.effect';
import { useEditItemNoteForm } from './edit-item-note-form.effect';
import { TextareaMolecule } from '../../atoms/textarea/textarea.molecule';
import { CheckIcon } from '@heroicons/react/outline';
import { ButtonMolecule } from '../../atoms/button/button.molecule';
import { useSharedData } from '../../../hooks/shared-data.effect';

export const ItemNoteMolecule = ({ note }: ItemNoteProps) => {
  const imageUrl = useRef(getRandomPlaceholderImage());

  const { user } = useSharedData();

  const [editable, setEditable] = useState(false);

  const { confirmItemNoteRemoval } = useDeleteItemNote();

  const { setData, data, errors, processing, handleSubmit } = useEditItemNoteForm(note, () => {
    setEditable(false);
  });

  useEffect(() => {
    setData('note', note.note);
  }, []);

  return (
    <li key={note.id}>
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={imageUrl.current} alt="" />
        </div>
        <div className="flex-1">
          <div className="text-sm">
            <a href="#" className="font-medium text-gray-900">
              {note.user.name}
            </a>
          </div>
          <div className="mt-1 text-sm text-gray-700">
            {!editable ? (
              <p>{note.note}</p>
            ) : (
              <form className="flex items-center">
                <div className="flex-1">
                  <TextareaMolecule
                    onChange={(value) => setData('note', value)}
                    value={data.note}
                    name="description"
                    errors={Boolean(errors.note)}
                    rows={3}
                  />
                  <p className="mt-1 text-error-color text-sm">{errors.note}</p>
                </div>
                <ButtonMolecule
                  disabled={processing}
                  onClick={handleSubmit}
                  className="ml-5 btn-primary"
                >
                  <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  {processing ? 'Updating...' : 'Update'}
                </ButtonMolecule>
              </form>
            )}
          </div>
          <div className="mt-2 text-sm space-x-4">
            <span className="text-gray-500 font-medium">
              {format(new Date(note.created_at), DateFormats.FULL)}
            </span>
            <button
              onClick={() => setEditable(!editable)}
              type="button"
              className="text-gray-900 font-medium"
            >
              {editable ? 'Cancel edit' : 'Edit'}
            </button>
            {user.id === note.user_id && (
              <button
                onClick={() => confirmItemNoteRemoval(note)}
                type="button"
                className="text-error-color-dark font-medium"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
