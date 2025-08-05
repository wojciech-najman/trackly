import { ToastTypes } from './toast-types.enum';

export interface ToastProps {
  close: () => void;
  title: string;
  description?: string;
  type?: ToastTypes;
  icon?: any;
}
