import { Action } from '../../../models/action';
import { LengthAwarePaginator } from '../../../models/length-aware-paginator';

export interface RecentActionsProps {
  items: LengthAwarePaginator<Action[]>;
}
