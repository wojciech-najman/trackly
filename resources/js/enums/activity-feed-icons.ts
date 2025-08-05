import { ActionTypes } from './action-types.enum';
import { DatabaseIcon, InboxInIcon, TagIcon, UserGroupIcon } from '@heroicons/react/outline';

export const activityFeedIcons: { [key: string]: { icon: any; bgColorClass: string } } = {
  [ActionTypes.STORE_CREATED]: { icon: InboxInIcon, bgColorClass: 'bg-green-500' },
  [ActionTypes.STORE_UPDATED]: { icon: InboxInIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.STORE_DELETED]: { icon: InboxInIcon, bgColorClass: 'bg-gray-400' },

  [ActionTypes.ITEM_CREATED]: { icon: DatabaseIcon, bgColorClass: 'bg-green-500' },
  [ActionTypes.ITEM_UPDATED]: { icon: DatabaseIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.ITEM_DELETED]: { icon: DatabaseIcon, bgColorClass: 'bg-gray-400' },
  [ActionTypes.ITEM_NOTE_CREATED]: { icon: DatabaseIcon, bgColorClass: 'bg-green-500' },
  [ActionTypes.ITEM_NOTE_UPDATED]: { icon: DatabaseIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.ITEM_NOTE_DELETED]: { icon: DatabaseIcon, bgColorClass: 'bg-gray-400' },

  [ActionTypes.TAG_CREATED]: { icon: TagIcon, bgColorClass: 'bg-green-500' },
  [ActionTypes.TAG_UPDATED]: { icon: TagIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.TAG_DELETED]: { icon: TagIcon, bgColorClass: 'bg-gray-400' },

  [ActionTypes.USER_REGISTERED]: { icon: UserGroupIcon, bgColorClass: 'bg-green-500' },
  [ActionTypes.USER_UPDATED_HIS_ACCOUNT]: { icon: UserGroupIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.USER_UPDATED_HIS_PASSWORD]: { icon: UserGroupIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.USER_CREATED]: { icon: UserGroupIcon, bgColorClass: 'bg-gray-400' },
  [ActionTypes.USER_ACCOUNT_UPDATED]: { icon: UserGroupIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.USER_PASSWORD_CHANGED]: { icon: UserGroupIcon, bgColorClass: 'bg-blue-500' },
  [ActionTypes.USER_DELETED]: { icon: UserGroupIcon, bgColorClass: 'bg-gray-400' },
};
