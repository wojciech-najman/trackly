import { Stock } from '../../../models/stock';
import { Store } from '../../../models/store';
import { Item } from '../../../models/item';

export interface MoveStockFormProp {
  stores: Store[];
  items: Item[];
  stock: Stock;
}
