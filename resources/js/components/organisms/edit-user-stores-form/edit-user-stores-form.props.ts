import { User } from '../../../models/user';
import { Store } from "../../../models/store";
import { StoreUser } from "../../../models/store-user";

export interface EditUserStoresFormProps {
  stores: Store[];
  storeUsers: StoreUser[];
  user: User;
}
