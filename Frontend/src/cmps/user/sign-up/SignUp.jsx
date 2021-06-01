import React, { Component } from 'react';
import { SignUpForm } from './SignUpForm';

export class SignUp extends Component {
  render() {
    return (
      <>
        <h3>Create account</h3>
        <SignUpForm signup={this.props.signup} />;
      </>
    );
  }
}
