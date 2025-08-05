import { ToggleProps } from './toggle.props';
import { Switch } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../../utils/class-names.util';

export const ToggleMolecule = (props: ToggleProps) => {
  return (
    <Switch
      checked={props.checked}
      onChange={() => props.onChange(!props.checked)}
      className={classNames(
        props.checked ? 'bg-primary-color' : 'bg-gray-200',
        'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color',
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          props.checked ? 'translate-x-5' : 'translate-x-0',
          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        )}
      />
    </Switch>
  );
};
