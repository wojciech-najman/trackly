import { useSharedData } from './shared-data.effect';
import { CompanyRoles } from '../enums/company-roles.enum';

export const useIsAdmin = (): boolean => {
  const { role } = useSharedData();

  return role?.name === CompanyRoles.ADMIN;
};
