import React from 'react';
import { PaginationBoxProps } from './pagination-box.props';
import { InertiaLink } from '@inertiajs/inertia-react';

export const PaginationBoxMolecule = ({ paginator }: PaginationBoxProps) => {
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing page <span className="font-medium">{paginator.current_page}</span> of{' '}
          <span className="font-medium">{paginator.last_page}</span> pages
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <InertiaLink
          disabled={!Boolean(paginator.prev_page_url)}
          as="button"
          className={`ml-3 btn btn-white ${
            !Boolean(paginator.prev_page_url) && 'opacity-60 cursor-default'
          }`}
          href={paginator.prev_page_url}
          preserveScroll={true}
        >
          Previous
        </InertiaLink>
        <InertiaLink
          disabled={!Boolean(paginator.next_page_url)}
          as="button"
          className={`ml-3 btn btn-white ${
            !Boolean(paginator.next_page_url) && 'opacity-60 cursor-default'
          }`}
          href={paginator.next_page_url}
          preserveScroll={true}
        >
          Next
        </InertiaLink>
      </div>
    </nav>
  );
};
