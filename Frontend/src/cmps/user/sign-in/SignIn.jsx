import { Link } from '@material-ui/core';
import React, { Component } from 'react';
import { SignInForm } from './SignInForm';

export class SignIn extends Component {
  render() {
    return (
      <>
        <h3>Sign In</h3>
        <SignInForm login={this.props.login} />
        <span onClick={this.props.goToSignUp}>Create account</span>
      </>
    );
  }
}
