import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { ToastTypes } from './toast-types.enum';
import { ToastProps } from './toast.props';

export const ToastMolecule = (props: ToastProps) => {
  const Icon = props.icon ?? CheckCircleIcon;

  return (
    <>
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {props.type === ToastTypes.SUCCESS && (
              <Icon className="h-8 w-8 text-primary-color" aria-hidden="true" />
            )}
          </div>
          <div className="ml-5 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{props.title}</p>
            {props.description && <p className="mt-1 text-sm text-gray-500">{props.description}</p>}
          </div>
          <div className="ml-4 self-start flex-shrink-0 flex">
            <button
              onClick={props.close}
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ToastMolecule.defaultProps = {
  type: ToastTypes.SUCCESS,
};
