/* eslint-disable camelcase */
import { Company } from "./company";
import { User } from "./user";

export interface CompanyUser {
  id: number;
  company_id: number;
  company: Company;
  user_id: number;
  user: User;
  active:boolean;
  created_at: string;
  updated_at: string;
}
