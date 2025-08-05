import { usePage } from '@inertiajs/inertia-react';
import { SharedData } from '../models/shared-data';

export const useSharedData = (): SharedData => {
  return usePage().props as unknown as SharedData;
};
