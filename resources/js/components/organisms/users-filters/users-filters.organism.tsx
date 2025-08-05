import React from 'react';
import { getSearchParam, getSearchParams } from '../../../utils/search-params';
import { Inertia } from '@inertiajs/inertia';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box.molecule';

export const UsersFiltersOrganism = () => {
  return (
    <>
      <SearchBoxMolecule
        initialValue={getSearchParam('search')}
        onSubmit={(value) => {
          Inertia.get('/users?' + getSearchParams({ search: value }));
        }}
      />
    </>
  );
};
