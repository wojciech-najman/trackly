import React from 'react';
import { LoginProps } from './login.props';

export const LoginTemplate: React.FC = ({ children }: LoginProps) => {
  return (
    <div className="min-h-full flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {children}
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=90"
          alt=""
        />
      </div>
    </div>
  );
};
