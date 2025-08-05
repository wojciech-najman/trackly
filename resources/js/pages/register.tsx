import React from 'react';
import { LoginTemplate } from '../components/templates/login/login.template';
import { RegisterBoxOrganism } from '../components/organisms/register-box/register-box.organism';

export default function Register() {
  return (
    <LoginTemplate>
      <RegisterBoxOrganism />
    </LoginTemplate>
  );
}
