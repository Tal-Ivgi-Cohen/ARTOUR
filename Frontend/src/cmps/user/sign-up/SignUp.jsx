import { Button } from '@material-ui/core';
import React from 'react';
import { UserForm } from '../UserForm';

export function SignUp({ signup, goToLogin }) {
  const cancel = () => goToLogin();
  return (
    <>
      <h3>Create account</h3>
      <UserForm signup={signup} />
      <Button onClick={cancel}>Cancel</Button>
    </>
  );
}
