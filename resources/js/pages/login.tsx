import React from 'react';
import { LoginBoxOrganism } from '../components/organisms/login-box/login-box.organism';
import { LoginTemplate } from '../components/templates/login/login.template';

export default function Login() {
  return (
    <LoginTemplate>
      <LoginBoxOrganism />
    </LoginTemplate>
  );
}
