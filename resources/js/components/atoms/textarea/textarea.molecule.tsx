import { TextareaProps } from './textarea.props';
import React from 'react';

export const TextareaMolecule = (props: TextareaProps) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.name} className="block label">
          {props.label}
        </label>
      )}
      <div className="mt-1">
        <textarea
          onChange={(event) => props.onChange(event.target.value)}
          id={props.name}
          rows={props.rows}
          autoComplete={props.autocomplete}
          className={`shadow-sm focus:ring-primary-color focus:border-primary-color mt-1 block w-full sm:text-sm border-gray-300 rounded-md ${
            props.className
          } ${props.className} ${props.errors ? 'border-error-color' : ''}`}
          value={props.value}
        />
      </div>
    </>
  );
};

TextareaMolecule.defaultProps = {
  autocomplete: 'off',
  rows: 3,
};
