import { Item } from '../../../models/item';
import { Store } from '../../../models/store';

export interface CreateStockFormProp {
  stores: Store[];
  items: Item[];
}
