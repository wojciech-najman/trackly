import React from "react";
import { TagsProps } from "./tags.props";
import { PaginationBoxMolecule } from "../../molecules/pagination-box/pagination-box.molecule";
import { ButtonMolecule } from "../../atoms/button/button.molecule";
import { Inertia } from "@inertiajs/inertia";
import { TagIcon } from "@heroicons/react/outline";
import format from "date-fns/format";
import { DateFormats } from "../../../enums/date-formats.enum";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useDeleteTag } from "./delete-tag.effect";
import { TagsFiltersOrganism } from "../tags-filters/tags-filters.organism";

export const TagsOrganism = ({ items }: TagsProps) => {
  const { confirmTagRemoval } = useDeleteTag();

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="header">Tags</h2>
          <div className="sm:flex sm:items-center sm:justify-end">
            <TagsFiltersOrganism />
            <ButtonMolecule
              onClick={() => Inertia.get('/tags/create')}
              className="btn-primary ml-4"
            >
              Create Tag
            </ButtonMolecule>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="table-th" />
                    <th className="table-th">ID</th>
                    <th className="table-th">Name</th>
                    <th className="table-th">Created</th>
                    <th className="table-th">Updated</th>
                    <th className="table-th" />
                    <th className="table-th" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.data.map((tag) => (
                    <tr key={tag.id} className="bg-white">
                      <td className="table-td">
                        <TagIcon
                          className="flex-shrink-0 h-5 w-5 text-primary-color group-hover:text-primary-color-dark"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="table-td">{tag.id}</td>
                      <td className="table-td">{tag.name}</td>
                      <td className="table-td">
                        <time dateTime={tag.created_at}>
                          {format(new Date(tag.created_at), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <time dateTime={tag.updated_at}>
                          {format(new Date(tag.updated_at), DateFormats.FULL)}
                        </time>
                      </td>
                      <td className="table-td">
                        <InertiaLink
                          href={`/tags/${tag.id}/edit`}
                          className="text-primary-color hover:text-primary-color-dark"
                        >
                          Edit
                        </InertiaLink>
                      </td>
                      <td className="table-td">
                        <a
                          onClick={() => confirmTagRemoval(tag)}
                          className="cursor-pointer text-error-color hover:text-error-color-dark"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PaginationBoxMolecule paginator={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
