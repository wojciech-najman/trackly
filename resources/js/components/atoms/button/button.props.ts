import React from 'react';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children: any;
  disabled?: boolean;
  type?: 'button' | 'submit';
}
