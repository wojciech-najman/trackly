import { toast } from 'react-toastify';
import React from 'react';
import { ToastMolecule } from '../components/molecules/toast/toast.molecule';
import { ToastMessage } from '../models/toast-message.model';
import { ActionToastMessage } from '../models/action-toast-message.model';
import { ConfirmationToastMolecule } from '../components/molecules/confirmation-toast/confirmation-toast-molecule';

export const notifyOk = (message: ToastMessage) => {
  toast(({ closeToast }) => (
    <ToastMolecule
      close={closeToast as () => void}
      title={message.title}
      description={message.description}
      icon={message.icon}
    />
  ));
};

export const notifyConfirm = (message: ActionToastMessage) => {
  toast(({ closeToast }) => (
    <ConfirmationToastMolecule
      close={closeToast as () => void}
      title={message.title}
      description={message.description}
      accepted={message.accepted}
      acceptText={message.acceptText}
      acceptBtnStyles={message.acceptBtnStyles}
      icon={message.icon}
    />
  ));
};
