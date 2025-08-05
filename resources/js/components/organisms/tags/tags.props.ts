import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Tag } from '../../../models/tag';

export interface TagsProps {
  items: LengthAwarePaginator<Tag[]>;
}
