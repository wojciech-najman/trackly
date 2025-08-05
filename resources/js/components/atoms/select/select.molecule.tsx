import { SelectProps } from './select.props';
import React from 'react';

export const SelectMolecule = (props: SelectProps) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.name} className="block label">
          {props.label}
        </label>
      )}
      <select
        onChange={(event) => props.onChange(event.target.value)}
        id={props.name}
        defaultValue={props.value}
        className={`mt-1 block w-full pl-3 pr-10 py-2 text-text-normal text-base border-gray-300 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm rounded-md disabled:bg-gray-50 disabled:cursor-default ${
          props.className
        } ${props.errors ? 'border-error-color' : ''}`}
        disabled={props.disabled}
      >
        <option key="-1" value="" disabled={props.emptyDisabled}>
          {props.emptyLabel}
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

SelectMolecule.defaultProps = {
  name: '',
  errors: false,
  disabled: false,
  emptyDisabled: true,
  emptyLabel: 'Choose...',
};
