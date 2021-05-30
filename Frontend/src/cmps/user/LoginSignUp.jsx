import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';

export class LoginSignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };

  login = () => {
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <section className='login'>
          <h1>Login</h1>
          <TextField
            label='Username'
            variant='outlined'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <TextField
            label='Password'
            variant='outlined'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <Button onClick={this.login}>Login</Button>
        </section>
        <section className='signUp'>
          <h1>SignUp</h1>
          <div>coming soon...</div>
        </section>
      </div>
    );
  }
}
