/* eslint-disable camelcase */
import { ItemNote } from './item-note';
import { Stock } from './stock';
import { Tag } from './tag';
import { TagItem } from './tag-item';

export interface Company {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
