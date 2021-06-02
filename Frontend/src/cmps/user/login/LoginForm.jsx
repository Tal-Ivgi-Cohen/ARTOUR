import React, { Component } from 'react';
import { Button, TextField, Tooltip } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isValidInput: false,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value }, () => {
      const { email, password } = this.state;
      let isValid =
        this.validateEmail(email) && this.validatePassword(password);
      this.setState({ isValidInput: isValid });
    });
  };

  login = (ev) => {
    ev.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password).toLowerCase());
  };

  render() {
    const { email, password, isValidInput } = this.state;

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
          <Tooltip
            title={
              <p>
                Minimum eight characters, at least one letter and one number.
              </p>
            }
          >
            <InfoOutlinedIcon />
          </Tooltip>
          <span to='/reset-password'>Forgot your password?</span>
          <Button variant='outlined' type='submit' disabled={!isValidInput}>
            Login
          </Button>
        </form>
      </section>
    );
  }
}
