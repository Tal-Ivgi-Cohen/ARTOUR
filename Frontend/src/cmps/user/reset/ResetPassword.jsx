import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Tooltip } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export class ResetPassword extends Component {
  state = {
    password: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ password: value });
  };

  validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password).toLowerCase());
  };

  reset = (ev) => {
    ev.preventDefault();
    const { password } = this.state;
    // this.props.reset(password);
  };

  render() {
    const { password } = this.state;
    return (
      <div className='reset-password'>
        <h3>Reset Password</h3>
        <form onSubmit={this.reset}>
          <section>
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
          </section>
          <section className='form-btns'>
            <Link to='/account/login'>
              <Button variant='outlined'>Cancel</Button>
            </Link>
            <Button
              variant='outlined'
              type='submit'
              disabled={!this.validatePassword}
            >
              Submit
            </Button>
          </section>
        </form>
      </div>
    );
  }
}
