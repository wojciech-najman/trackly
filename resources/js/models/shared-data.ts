import { User } from './user';
import { Company } from "./company";
import { CompanyRole } from "./company-role";

export interface SharedData {
  user: User;
  storesCount: number;
  itemsCount: number;
  tagsCount: number;
  company?: Company;
  role?: CompanyRole;
  errors: { [key: string]: string};
}
