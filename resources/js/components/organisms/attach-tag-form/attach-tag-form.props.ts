import { Item } from '../../../models/item';
import { Tag } from '../../../models/tag';

export interface AttachTagFormProp {
  item: Item;
  tags: Tag[];
}
