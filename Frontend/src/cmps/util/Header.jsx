import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export class Header extends React.Component {
  render() {
    return (
      <header className='app-header'>
        <h2>Logo</h2>
        <nav>
          <NavLink to='/'>Home</NavLink> |<NavLink to='/art'>Explore</NavLink> |
          <NavLink to='/about'>About</NavLink> |
          <NavLink to='/account'>
            <AccountCircleIcon />
          </NavLink>
        </nav>
      </header>
    );
  }
}
