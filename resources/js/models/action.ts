/* eslint-disable camelcase */
import { User } from './user';

export interface Action {
  id: number;
  model: string;
  model_id: number;
  type: string;
  description: string;
  user_id: number;
  user: User;
  created_at: string;
  updated_at: string;
}
