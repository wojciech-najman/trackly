import { Item } from '../../../models/item';
import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Action } from '../../../models/action';

export interface ItemViewProps {
  item: Item;
  actions: LengthAwarePaginator<Action[]>;
}
