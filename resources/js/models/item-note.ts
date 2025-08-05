/* eslint-disable camelcase */
import { User } from './user';

export interface ItemNote {
  id: number;
  item_id: number;
  user_id: number;
  user: User;
  note: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
