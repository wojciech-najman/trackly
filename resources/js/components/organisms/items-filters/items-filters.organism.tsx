import React from 'react';
import { getSearchParam, getSearchParams } from '../../../utils/search-params';
import { Inertia } from '@inertiajs/inertia';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box.molecule';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { ItemsFiltersProps } from './items-filters.props';

export const ItemsFiltersOrganism = ({ tags }: ItemsFiltersProps) => {
  return (
    <div className="flex space-x-3">
      <div className="w-full md:w-48">
        <SelectMolecule
          emptyLabel="Choose tag..."
          emptyDisabled={false}
          className="mt-0"
          onChange={(value) => {
            Inertia.get('/items?' + getSearchParams({ tag: value }));
          }}
          value={String(getSearchParam('tag'))}
          name=""
          options={tags.map((tag) => ({ label: tag.name, value: String(tag.id) }))}
        />
      </div>
      <SearchBoxMolecule
        initialValue={getSearchParam('search')}
        onSubmit={(value) => {
          Inertia.get('/items?' + getSearchParams({ search: value }));
        }}
      />
    </div>
  );
};
