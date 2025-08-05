import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { ItemCheckout } from '../../../models/item-checkout';

export interface CheckoutsProps {
  items: LengthAwarePaginator<ItemCheckout[]>;
}
