import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Store } from '../../../models/store';

export interface StoresProps {
  items: LengthAwarePaginator<Store[]>;
}
