import React from 'react';
import { CheckboxProps } from './checkbox.props';

export const CheckboxMolecule = (props: CheckboxProps) => {
  return (
    <>
      <input
        id={props.name}
        type="checkbox"
        value={props.value as unknown as string}
        className={`h-4 w-4 text-primary-color focus:ring-primary-color border-gray-300 rounded ${props.className}`}
        onChange={(event) => props.onChange(Boolean(event.target.value))}
      />
      <label htmlFor={props.name} className="ml-2 block text-sm text-gray-900">
        {props.label}
      </label>
    </>
  );
};
