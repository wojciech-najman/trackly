import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { usePage } from '@inertiajs/inertia-react';
import { User } from '../models/user';
import {
    EditUserStoresFormOrganism
} from "../components/organisms/edit-user-stores-form/edit-user-stores-form.organism";
import { Store } from "../models/store";
import { StoreUser } from "../models/store-user";

export default function EditUserStores() {
  const { stores, edited_user, store_users } = usePage().props;

  return (
    <DashboardTemplate>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditUserStoresFormOrganism
            user={edited_user as User}
            stores={stores as Store[]}
            storeUsers={store_users as StoreUser[]}
          />
        </div>
      </div>
    </DashboardTemplate>
  );
}
