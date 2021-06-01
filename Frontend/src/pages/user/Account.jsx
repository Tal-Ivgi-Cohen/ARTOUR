import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserDashboard } from '../../cmps/user/dashboard/UserDashboard.jsx';
import { SignInSignUp } from '../../cmps/user/SignInSignUp.jsx';
import {
  loadUser,
  login,
  logout,
  signup,
} from '../../store/user/user.action.js';
import { removeArt, loadArts } from '../../store/art/art.action.js';

class _Account extends Component {
  componentDidMount() {
    this.props.loadUser();
    if (!this.props.arts.length) this.props.loadArts();
    // TODO: load orders
  }
  render() {
    const { user, removeArt, arts, login, logout, signup } = this.props;
    if (user) {
      const userArts = arts
        ? arts.filter((art) => art.artist._id === user._id)
        : [];
      // const ordersByUser = orders.filter(order => order.buyer.id === userId);
      // const ordersToUser = orders.filter(order => order.items.filter(item => item.artist.id === userId));
      // const userOrders = {ordersByUser,ordersToUser}
      return (
        <>
          <h3>Account</h3>
          <UserDashboard
            user={user}
            userArts={userArts}
            // userOrders={orders}
            removeArt={removeArt}
            logout={logout}
          />
        </>
      );
    } else
      return (
        <>
          <h3>Account</h3>
          <SignInSignUp login={login} signup={signup} />
        </>
      );
  }
}

function mapStateToProps({ userModule, artModule }) {
  return {
    user: userModule.user,
    arts: artModule.arts,
    // orders: orderModule.orders,
  };
}

const mapDispatchToProps = {
  loadUser,
  login,
  signup,
  logout,
  removeArt,
  loadArts,
};

export const Account = connect(mapStateToProps, mapDispatchToProps)(_Account);
