/* eslint-disable camelcase */

import { Item } from './item';
import { Store } from './store';

export interface Stock {
  id: number;
  name: string;
  store_id: number;
  store: Store;
  item_id: number;
  item: Item;
  quantity: number;
  low_stock: number;
  created_at: string;
  updated_at: string;
}
