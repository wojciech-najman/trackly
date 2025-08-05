import { LengthAwarePaginator } from "../../../models/length-aware-paginator";
import { CompanyUser } from "../../../models/company-user";

export interface UsersProps {
  items: LengthAwarePaginator<CompanyUser[]>;
}
