export interface ActionToastMessage {
  title: string;
  description: string;
  acceptText: string;
  accepted: () => void;
  acceptBtnStyles?: string;
  icon?: any;
}
