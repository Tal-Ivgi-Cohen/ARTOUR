import React, { Component } from 'react';
import { SignIn } from './sign-in/SignIn.jsx';
import { SignUp } from './sign-up/SignUp';

export class SignInSignUp extends Component {
  state = {
    isSignInShown: true,
  };

  goToSignUp = () => this.setState({ isSignInShown: false });
  render() {
    const { isSignInShown } = this.state;
    const { login, signup } = this.props;
    return (
      <>
        <section className='quick-sign-in'>
          <div>
            <span>Sign in with Facebook</span>
          </div>
          <div>
            <span>Sign in with Google</span>
          </div>
          {isSignInShown ? (
            <SignIn login={login} goToSignUp={this.goToSignUp} />
          ) : (
            <SignUp signup={signup} />
          )}
        </section>
      </>
    );
  }
}
