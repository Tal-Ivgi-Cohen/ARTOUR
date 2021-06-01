import React, { Component } from 'react';
import { UserArts } from './UserArts.jsx';
import { UserOrders } from './UserOrders.jsx';
import { UserDetails } from './UserDetails.jsx';
import { Button } from '@material-ui/core';

export class UserDashboard extends Component {
  render() {
    const { user, userArts, userOrders, removeArt, logout } = this.props;
    return (
      <div>
        <h2>Hello, {user.fullname}</h2>
        <Button onClick={() => logout()}>Logout</Button>
        <UserDetails user={user} />
        {user.isArtist && <UserArts arts={userArts} removeArt={removeArt} />}
        {userOrders && <UserOrders orders={userOrders} />}
      </div>
    );
  }
}
