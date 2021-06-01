import React, { Component } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Avatar,
  Tooltip,
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export class UserForm extends Component {
  state = {
    email: '',
    fullname: '',
    password: '',
    isArtist: false,
    isValidInput: false,
  };

  componentDidMount() {
    if (this.props.user) {
      // Edit mode
      const { email, fullname, password, isArtist } = this.props.user;
      this.setState({
        email,
        fullname,
        password,
        isArtist,
        isValidInput: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = field === 'isArtist' ? target.checked : target.value;
    this.setState({ [field]: value }, () => {
      const { email, password } = this.state;
      let isValid =
        this.validateEmail(email) && this.validatePassword(password);
      this.setState({ isValidInput: isValid });
    });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const { email, fullname, password, isArtist } = this.state;
    // TODO: validate email & password
    const userInfo = {
      email,
      fullname,
      password,
      isArtist,
    };
    if (this.props.user) {
      // Edit mode
      userInfo._id = this.props.user._id;
      this.props.updateUser(userInfo);
      this.props.editModeOff();
    } else {
      // Add mode
      userInfo.isAdmin = false;
      this.props.signup(userInfo);
    }
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
    const { email, fullname, password, isArtist, isValidInput } = this.state;
    return (
      <section className='sign-up'>
        <form onSubmit={this.onSubmit}>
          <TextField
            label='Email'
            variant='outlined'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <TextField
            label='Full name'
            variant='outlined'
            name='fullname'
            value={fullname}
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
          <Avatar src='/img' alt={fullname} />
          <FormControlLabel
            control={
              <Switch
                checked={isArtist}
                onChange={this.handleChange}
                name='isArtist'
              />
            }
            label="I'm an artist"
          />
          <Button variant='outlined' type='submit' disabled={!isValidInput}>
            Submit
          </Button>
        </form>
      </section>
    );
  }
}
