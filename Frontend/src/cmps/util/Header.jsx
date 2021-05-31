import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export class Header extends React.Component {
  render() {
    return (
      <header className='app-header'>
        <h2>ArTour Marketplace</h2>
        <nav>
          <NavLink to='/home' className="nav-link">Home</NavLink> |
          <NavLink to='/art' className="nav-link">Explore</NavLink> |
          <NavLink to='/about' className="nav-link">About</NavLink> |
          <NavLink to='/account' className="nav-link">
            <AccountCircleIcon />
          </NavLink>
        </nav>
      </header>
    );
  }
}
