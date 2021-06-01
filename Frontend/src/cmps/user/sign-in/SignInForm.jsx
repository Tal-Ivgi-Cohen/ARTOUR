import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

export class SignInForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };

  login = () => {
    const { email, password } = this.state;
    this.props.login({ email, password });
  };
  render() {
    const { email, password } = this.state;

    return (
      <section className='login'>
        <form onSubmit={this.login}>
          <TextField
            label='Email'
            variant='outlined'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <TextField
            label='Password'
            variant='outlined'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
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
