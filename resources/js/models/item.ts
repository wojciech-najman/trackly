/* eslint-disable camelcase */
import { ItemNote } from './item-note';
import { Stock } from './stock';
import { Tag } from './tag';
import { TagItem } from './tag-item';

export interface Item {
  id: number;
  name: string;
  description: string;
  code: string;
  price: number;
  created_at: string;
  updated_at: string;
  notes?: ItemNote[];
  stock?: Stock[];
  tags?: TagItem[];
}
