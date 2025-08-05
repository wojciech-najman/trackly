import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Stock } from '../../../models/stock';
import { Tag } from "../../../models/tag";

export interface StockProps {
  items: LengthAwarePaginator<Stock[]>;
  tags: Tag[];
}
