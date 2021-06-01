import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { ImgUploadPreview } from '../../util/ImgUploadPreview';

export class SignUpForm extends Component {
  state = {
    email: '',
    username: '',
    fullName: '',
    password: '',
    imgUrl: null,
    isArtist: false,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
  };

  onImgChange = (url) => {
    this.setState((prevState) => {
      return {
        art: {
          ...prevState.art,
          imgUrl: url,
        },
      };
    });
  };

  onSubmit = () => {
    const userInfo = {};
    this.props.signup(userInfo);
  };

  render() {
    const { email, username, fullName, password, imgUrl, isArtist } =
      this.state;
    return (
      <section className='sign-up'>
        <form onSubmit={this.onSubmit}>
          <TextField
            label='Email'
            variant='outlined'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
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
          <ImgUploadPreview imgUrl={imgUrl} onImgChange={this.onImgChange} />
          
          <Button variant='outlined' type='submit'>
            Submit
          </Button>
        </form>
      </section>
    );
  }
}
