import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Item } from '../../../models/item';
import { Tag } from "../../../models/tag";

export interface ItemsProps {
  items: LengthAwarePaginator<Item[]>;
  tags: Tag[];
}
