import React, { Component } from 'react';
import { LoginForm } from './LoginForm';

export class Login extends Component {
  render() {
    return (
      <>
        <h3>Log In</h3>
        <LoginForm login={this.props.login} />
        <span onClick={this.props.goToSignUp}>Create account</span>
      </>
    );
  }
}
