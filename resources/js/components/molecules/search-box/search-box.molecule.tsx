import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { SearchBoxProps } from './search-box.props';

export const SearchBoxMolecule = ({ onSubmit, initialValue }: SearchBoxProps) => {
  const [value, setValue] = useState(initialValue ?? '');

  return (
    <div className="mt-3 sm:mt-0">
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            onKeyUp={event => {
                if (event.key === 'Enter') {
                    onSubmit(value);
                }
            }}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            name="desktop-search-candidate"
            id="desktop-search-candidate"
            className="focus:ring-primary-color focus:border-primary-color w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
            placeholder="Search..."
          />
        </div>
        <button
          onClick={() => onSubmit(value)}
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-500 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};
