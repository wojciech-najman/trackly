/* eslint-disable camelcase */
import { Tag } from './tag';
import { Item } from './item';

export interface TagItem {
  id: number;
  tag_id: number;
  tag: Tag;
  item_id: number;
  item: Item;
  created_at: string;
  updated_at: string;
}
