import React from 'react';
import { getSearchParam, getSearchParams } from '../../../utils/search-params';
import { Inertia } from '@inertiajs/inertia';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box.molecule';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { StockFiltersProps } from './stock-filters.props';

export const StockFiltersOrganism = ({ tags }: StockFiltersProps) => {
  return (
    <div className="md:flex space-x-3">
      <div className="w-full md:w-48">
        <SelectMolecule
          emptyLabel="Low stock"
          emptyDisabled={false}
          className="mt-0"
          onChange={(value) => {
            Inertia.get('/stock?' + getSearchParams({ low_stock: value }));
          }}
          value={String(getSearchParam('low_stock'))}
          options={[{label: 'Yes', value: '1'}]}
        />
      </div>
      <div className="w-full md:w-48">
        <SelectMolecule
          emptyLabel="Choose tag..."
          emptyDisabled={false}
          className="mt-0"
          onChange={(value) => {
            Inertia.get('/stock?' + getSearchParams({ tag: value }));
          }}
          value={String(getSearchParam('tag'))}
          options={tags.map((tag) => ({ label: tag.name, value: String(tag.id) }))}
        />
      </div>
      <SearchBoxMolecule
        initialValue={getSearchParam('search')}
        onSubmit={(value) => {
          Inertia.get('/stock?' + getSearchParams({ search: value }));
        }}
      />
    </div>
  );
};
