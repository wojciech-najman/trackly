import { Stock } from '../../../models/stock';
import { Store } from '../../../models/store';
import { Item } from '../../../models/item';

export interface EditStockFormProp {
  stores: Store[];
  items: Item[];
  stock: Stock;
}
