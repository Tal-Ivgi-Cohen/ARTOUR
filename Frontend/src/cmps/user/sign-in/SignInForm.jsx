import React, { Component } from 'react';
import { Button, Link, TextField } from '@material-ui/core';

export class SignInForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };
  render() {
    const { username, password } = this.state;

    return (
      <section className='login'>
        <form onSubmit={() => this.props.login({ username, password })}>
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
          <span to='/reset-password'>Forgot your password?</span>
          <Button variant='outlined' type='submit'>
            Sign In
          </Button>
        </form>
      </section>
    );
  }
}
