import React from 'react';
import { Avatar } from '@material-ui/core';

export function UserDetails({ user }) {
  return (
    <section className='user-details'>
      <p>Username: {user.userName}</p>
      <p>Password: {user.password}</p>
      <Avatar src={user.imgUrl} alt={user.fullname} />
    </section>
  );
}
