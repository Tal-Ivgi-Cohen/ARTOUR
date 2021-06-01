import React, { Component } from 'react';
import { Avatar, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { UserForm } from '../UserForm';

export class UserDetails extends Component {
  state = { isEditing: false };
  editModeOn = () => this.setState({ isEditing: true });
  editModeOff = () => this.setState({ isEditing: false });

  render() {
    const { email, password, fullname } = this.props.user;
    const { isEditing } = this.state;
    return (
      <section className='user-details'>
        {isEditing ? (
          <UserForm
            user={this.props.user}
            updateUser={this.props.updateUser}
            editModeOff={this.editModeOff}
          />
        ) : (
          <>
            <Avatar src='/img' alt={fullname} />
            <ul>
              <li>Email: {email}</li>
              <li>Full name: {fullname}</li>
              <li>Password: {password}</li>
            </ul>
            <Button onClick={this.editModeOn}>
              <EditIcon />
            </Button>
          </>
        )}
      </section>
    );
  }
}
