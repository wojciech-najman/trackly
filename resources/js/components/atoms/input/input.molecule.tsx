import { InputProps } from './input.props';
import React from 'react';

export const InputMolecule = (props: InputProps) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.name} className="block label">
          {props.label}
        </label>
      )}
      <input
        onChange={(event) => props.onChange(event.target.value)}
        type={props.type}
        id={props.name}
        autoComplete={props.autocomplete}
        value={props.value}
        className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm disabled:bg-gray-50 disabled:cursor-default ${
          props.className
        } ${props.errors ? 'border-error-color' : ''}`}
        disabled={props.disabled}
      />
    </>
  );
};

InputMolecule.defaultProps = {
  type: 'text',
  autocomplete: 'off',
  errors: false,
  disabled: false,
};
