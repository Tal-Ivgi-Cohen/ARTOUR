import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserDashboard } from '../../cmps/user/UserDashboard.jsx';
import { LoginSignUp } from '../../cmps/user/LoginSignUp.jsx';
import { loadUser, login } from '../../store/user/user.action.js';
import { removeArt } from '../../store/art/art.action.js';

class _Account extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    const { user, userArts, userOrders, removeArt, login } = this.props;
    return user ? (
      <UserDashboard
        user={user}
        userArts={userArts}
        userOrders={userOrders}
        removeArt={removeArt}
      />
    ) : (
      <LoginSignUp login={login} />
    );
  }
}

function mapStateToProps({ userModule }) {
  return {
    user: userModule.user,
    userArts: userModule.userArts,
    userOrders: userModule.userModule,
  };
}

const mapDispatchToProps = {
  loadUser,
  removeArt,
  login,
};

export const Account = connect(mapStateToProps, mapDispatchToProps)(_Account);
