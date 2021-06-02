import React, { Component } from 'react';
import { Login } from './login/Login.jsx';
import { SignUp } from './sign-up/SignUp';

export class LoginSignUp extends Component {
  state = {
    isLoginShown: true,
  };

  goToSignUp = () => this.setState({ isLoginShown: false });
  goToLogin = () => this.setState({ isLoginShown: true });
  render() {
    const { isLoginShown } = this.state;
    const { login, signup } = this.props;
    return (
      <>
        <section className='quick-login'>
          <div>
            <span>Sign in with Facebook</span>
          </div>
          <div>
            <span>Sign in with Google</span>
          </div>
        </section>
        {isLoginShown ? (
          <Login login={login} goToSignUp={this.goToSignUp} />
        ) : (
          <SignUp signup={signup} goToLogin={this.goToLogin} />
        )}
      </>
    );
  }
}
