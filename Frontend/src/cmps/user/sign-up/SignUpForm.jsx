import React, { Component } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import { ImgUploadPreview } from '../../util/ImgUploadPreview';

export class SignUpForm extends Component {
  state = {
    email: '',
    username: '',
    fullname: '',
    password: '',
    imgUrl: null,
    isArtist: false,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = field === 'isArtist' ? target.checked : target.value;
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
    const { email, fullname, password, imgUrl, isArtist } = this.state;
    // TODO: validate email & password
    const userInfo = {
      email,
      fullname,
      password,
      imgUrl,
      isArtist,
      isAdmin: false,
    };
    this.props.signup(userInfo);
  };

  render() {
    const { email, fullname, password, imgUrl, isArtist } = this.state;
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
          <ImgUploadPreview imgUrl={imgUrl} onImgChange={this.onImgChange} />
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
          <Button variant='outlined' type='submit'>
            Submit
          </Button>
        </form>
      </section>
    );
  }
}
