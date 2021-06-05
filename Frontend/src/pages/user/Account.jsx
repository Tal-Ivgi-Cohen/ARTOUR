import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserDashboard } from '../../cmps/user/dashboard/UserDashboard.jsx';
import { LoginSignUpReset } from '../../cmps/user/LoginSignUpReset.jsx';
import {
  loadLoggedInUser,
  login,
  logout,
  signup,
  updateUser,
} from '../../store/user/user.action.js';
import { removeArt, loadArts } from '../../store/art/art.action.js';

class _Account extends Component {
  componentDidMount() {
    this.props.loadLoggedInUser();
    if (!this.props.arts.length) this.props.loadArts();
    // TODO: load orders
  }
  render() {
    const { loggedInUser, removeArt, arts, login, logout, signup, updateUser } =
      this.props;
    if (loggedInUser) {
      const userArts = arts
        ? arts.filter((art) => art.artist._id === loggedInUser._id)
        : [];
      // const ordersByUser = orders.filter(order => order.buyer.id === userId);
      // const ordersToUser = orders.filter(order => order.items.filter(item => item.artist.id === userId));
      // const userOrders = {ordersByUser,ordersToUser}
      return (
        <div className='account-page'>
          <h3>Account</h3>
          <UserDashboard
            user={loggedInUser}
            userArts={userArts}
            // userOrders={orders}
            removeArt={removeArt}
            logout={logout}
            updateUser={updateUser}
            tab={this.props.match.params.tab}
            history={this.props.history}
          />
        </div>
      );
    } else
      return (
        <div className='account-page'>
          <h3>Account</h3>
          <LoginSignUpReset
            login={login}
            signup={signup}
            history={this.props.history}
            tab={this.props.match.params.tab}
          />
        </div>
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
  updateUser,
  removeArt,
  loadArts,
};

export const Account = connect(mapStateToProps, mapDispatchToProps)(_Account);
