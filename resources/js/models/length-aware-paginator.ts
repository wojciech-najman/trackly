/* eslint-disable camelcase */
export interface LengthAwarePaginator<T> {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  from: number;
  to: number;
  data: T;
}
