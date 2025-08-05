import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Action } from '../../../models/action';

export interface ActivityProps {
  items: LengthAwarePaginator<Action[]>;
}
