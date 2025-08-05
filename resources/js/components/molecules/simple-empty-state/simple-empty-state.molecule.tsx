import { SimpleEmptyStateProps } from './simple-empty-state.props';
import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { ButtonMolecule } from '../../atoms/button/button.molecule';

export const SimpleEmptyStateMolecule = (props: SimpleEmptyStateProps) => {
  const Icon = props.icon;

  return (
    <div className="text-center">
      <Icon className="mx-auto h-12 w-12 text-gray-300" />
      <h3 className="mt-2 text-sm font-medium text-gray-600">{props.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{props.text}</p>
      {props.buttonText && (
        <div className="mt-6">
          <ButtonMolecule type="button" className="btn-primary">
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {props.buttonText}
          </ButtonMolecule>
        </div>
      )}
    </div>
  );
};
