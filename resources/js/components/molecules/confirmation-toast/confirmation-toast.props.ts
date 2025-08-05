export interface ConfirmationToastProps {
  close: () => void;
  title: string;
  description?: string;
  acceptText: string;
  acceptBtnStyles?: string;
  accepted: () => void;
  icon?: any;
}
