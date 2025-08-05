import { Tag } from '../../../models/tag';
import { notifyConfirm } from '../../../utils/notify.util';
import { TagIcon } from '@heroicons/react/outline';
import { Inertia } from '@inertiajs/inertia';

export const useDeleteTag = () => {
  const confirmTagRemoval = (tag: Tag) => {
    notifyConfirm({
      title: 'Delete tag',
      description: `Are you sure you want to delete tag: ${tag.name}? `,
      acceptText: 'Delete',
      accepted: () => deleteTag(tag.id),
      acceptBtnStyles: 'text-error-color',
      icon: TagIcon,
    });
  };

  const deleteTag = (id: number) => {
    Inertia.delete(`/tags/${id}`, {
      preserveScroll: true,
      errorBag: 'tags',
    });
  };

  return { confirmTagRemoval };
};
