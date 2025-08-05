import { CompanyRole } from '../../../models/company-role';
import { User } from '../../../models/user';

export interface EditUserRoleFormProps {
  role: CompanyRole;
  roles: CompanyRole[];
  user: User;
}
