import React from 'react';
import { LoginTemplate } from '../components/templates/login/login.template';
import { ConfirmPasswordBoxOrganism } from '../components/organisms/confirm-password-box/confirm-password-box.organism';

export default function ConfirmPassword() {
  return (
    <LoginTemplate>
      <ConfirmPasswordBoxOrganism />
    </LoginTemplate>
  );
}
