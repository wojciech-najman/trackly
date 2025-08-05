import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { ConfirmationToastProps } from './confirmation-toast.props';

export const ConfirmationToastMolecule = (props: ConfirmationToastProps) => {
  const Icon = props.icon ?? CheckCircleIcon;

  return (
    <>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 self-center">
            <Icon className="h-8 w-8 text-primary-color" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{props.title}</p>
            <p className="mt-1 text-sm text-gray-500">{props.description}</p>
            <div className="mt-3 flex space-x-7">
              <button
                onClick={props.accepted}
                type="button"
                className={`bg-white rounded-md text-sm font-medium text-primary-color hover:text-primary-color-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${props.acceptBtnStyles}`}
              >
                {props.acceptText}
              </button>
              <button
                onClick={props.close}
                type="button"
                className="bg-white rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={props.close}
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
