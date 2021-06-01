import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserDashboard } from '../../cmps/user/dashboard/UserDashboard.jsx';
import { SignInSignUp } from '../../cmps/user/SignInSignUp.jsx';
import {
  loadLoggedInUser,
  login,
  logout,
  signup,
} from '../../store/user/user.action.js';
import { removeArt, loadArts } from '../../store/art/art.action.js';

class _Account extends Component {
  componentDidMount() {
    this.props.loadLoggedInUser();
    if (!this.props.arts.length) this.props.loadArts();
    // TODO: load orders
  }
  render() {
    const { loggedInUser, removeArt, arts, login, logout, signup } = this.props;
    if (loggedInUser) {
      const userArts = arts
        ? arts.filter((art) => art.artist._id === loggedInUser._id)
        : [];
      // const ordersByUser = orders.filter(order => order.buyer.id === userId);
      // const ordersToUser = orders.filter(order => order.items.filter(item => item.artist.id === userId));
      // const userOrders = {ordersByUser,ordersToUser}
      return (
        <>
          <h3>Account</h3>
          <UserDashboard
            user={loggedInUser}
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
    loggedInUser: userModule.loggedInUser,
    arts: artModule.arts,
    // orders: orderModule.orders,
  };
}

const mapDispatchToProps = {
  loadLoggedInUser,
  login,
  signup,
  logout,
  removeArt,
  loadArts,
};

export const Account = connect(mapStateToProps, mapDispatchToProps)(_Account);
