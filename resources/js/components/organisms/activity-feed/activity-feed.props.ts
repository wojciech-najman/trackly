import { LengthAwarePaginator } from '../../../models/length-aware-paginator';
import { Action } from '../../../models/action';
import { DateFormats } from '../../../enums/date-formats.enum';

export interface ActivityFeedProps {
  actions: LengthAwarePaginator<Action[]>;
  title: string;
  buttonText: string;
  buttonUrl: string;
  dateFormat?: DateFormats;
}
