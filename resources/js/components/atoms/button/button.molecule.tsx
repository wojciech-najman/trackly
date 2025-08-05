import { ButtonProps } from './button.props';
import React from 'react';

export const ButtonMolecule: React.FC = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={(event) => props.onClick(event)}
      className={`btn ${props.className} ${props.disabled && 'opacity-60 cursor-default'}`}
    >
      {props.children}
    </button>
  );
};

ButtonMolecule.defaultProps = {
  disabled: false,
};
