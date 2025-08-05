/* eslint-disable camelcase */
import { Store } from './store';
import { Item } from './item';
import { User } from './user';

export interface ItemCheckout {
  id: number;
  store_id: number;
  store: Store;
  item_id: number;
  item: Item;
  user_id: number;
  user: User;
  quantity: number;
  date_from: string;
  date_to: string;
}
