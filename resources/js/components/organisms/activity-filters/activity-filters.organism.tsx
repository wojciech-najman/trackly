import React from 'react';
import { getSearchParam, getSearchParams } from '../../../utils/search-params';
import { Inertia } from '@inertiajs/inertia';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box.molecule';
import { SelectMolecule } from '../../atoms/select/select.molecule';
import { ActionTypes } from '../../../enums/action-types.enum';

export const ActivityFiltersOrganism = () => {
  return (
    <div>
      <div className="sm:ml-4">
        <SearchBoxMolecule
          initialValue={getSearchParam('search')}
          onSubmit={(value) => {
            Inertia.get('/activity?' + getSearchParams({ search: value }));
          }}
        />
      </div>
    </div>
  );
};
