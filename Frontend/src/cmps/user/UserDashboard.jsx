import React, { Component } from 'react';
import { UserArts } from './UserArts.jsx';
import { UserOrders } from './UserOrders.jsx';
import { UserDetails } from './UserDetails.jsx';

export class UserDashboard extends Component {
  render() {
    const { user, userArts, userOrders, removeArt } = this.props;
    return (
      <div>
        <h2>Hello, {user.fullName}</h2>
        <UserDetails user={user} />
        {user.isArtist && <UserArts arts={userArts} removeArt={removeArt} />}
        {userOrders && <UserOrders orders={userOrders} />}
      </div>
    );
  }
}
