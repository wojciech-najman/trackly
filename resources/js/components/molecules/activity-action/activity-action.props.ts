import { Action } from '../../../models/action';
import { DateFormats } from '../../../enums/date-formats.enum';

export interface ActivityActionProps {
  action: Action;
  last: boolean;
  dateFormat: DateFormats;
}
