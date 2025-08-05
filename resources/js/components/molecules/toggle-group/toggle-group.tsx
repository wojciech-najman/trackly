import { ToggleGroupProps } from './toggle-group.props';
import { Switch } from '@headlessui/react';
import { ToggleMolecule } from '../../atoms/toggle/toggle.molecule';
import React from 'react';

export const ToggleGroup = (props: ToggleGroupProps) => {
  return (
    <Switch.Group as="li" className="py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <Switch.Label as="p" className="label" passive>
          {props.title}
        </Switch.Label>
        <Switch.Description className="text">{props.description}</Switch.Description>
      </div>
      <ToggleMolecule checked={props.checked} onChange={props.onChange} />
    </Switch.Group>
  );
};
