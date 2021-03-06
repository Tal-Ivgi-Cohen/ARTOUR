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
  resetPassword,
} from '../../store/user/user.action.js';
import { removeArt, loadArts } from '../../store/art/art.action.js';

class _Account extends Component {
  componentDidMount() {
   if (this.props.loggedInUser === null) return
    this.props.loadLoggedInUser();
    if (!this.props.arts.length) this.props.loadArts();
    const { tab } = this.props.match.params;
    if (!tab || tab === 'undefined') this.props.history.push('/account/login');
  }
  render() {
    const {
      loggedInUser,
      removeArt,
      arts,
      login,
      logout,
      signup,
      updateUser,
      resetPassword,
    } = this.props;
    if (loggedInUser) {
      const userArts = arts
        ? arts.filter((art) => art.artist._id === loggedInUser._id)
        : [];
      const userOrders = loggedInUser.orders;
      return (
        <div className='account-page'>
          <h3>Account</h3>
          <UserDashboard
            user={loggedInUser}
            userArts={userArts}
            userOrders={userOrders}
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
            resetPassword={resetPassword}
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
  resetPassword,
  removeArt,
  loadArts,
};

export const Account = connect(mapStateToProps, mapDispatchToProps)(_Account);
