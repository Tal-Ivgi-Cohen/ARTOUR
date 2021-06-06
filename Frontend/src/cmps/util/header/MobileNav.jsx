import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  withStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { Logo } from '../Logo';
import { SearchModal } from '../SearchModal';

const styles = () => ({
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
  },
});

class _MobileNav extends Component {
  state = { isDrawerOpen: false, isSearchOpen: false };
  openDrawer = () => this.setState({ isDrawerOpen: true });
  closeDrawer = () => this.setState({ isDrawerOpen: false });
  openSearch = () => this.setState({ isSearchOpen: true });
  closeSearch = () => this.setState({ isSearchOpen: false });
  getDrawerData = () => [
    {
      label: 'Home',
      href: '/home',
    },
    {
      label: 'Explore',
      href: '/art',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
    },
    {
      label: 'Account',
      href: '/account',
    },
  ];
  getHeaderData = () => [
    {
      label: <Logo />,
      href: '/home',
      onClick: null,
    },
    {
      label: <SearchIcon />,
      href: '#',
      onClick: this.openSearch,
    },
    {
      label: <LocalMallOutlinedIcon />,
      href: '/cart',
      onClick: null,
    },
  ];

  render() {
    const { classes } = this.props;
    const { isDrawerOpen, isSearchOpen } = this.state;
    return (
      <div className="mobile-nav">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              {...{
                edge: 'start',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: this.openDrawer,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              {...{
                anchor: 'top',
                open: isDrawerOpen,
                onClose: this.closeDrawer,
              }}
            >
              <div>
                {this.getDrawerData().map(({ label, href }, idx) => {
                  return (
                    <Link
                      {...{
                        component: RouterLink,
                        to: href,
                        color: 'inherit',
                        style: { textDecoration: 'none' },
                        key: idx,
                        onClick: this.closeDrawer,
                      }}
                    >
                      <MenuItem>{label}</MenuItem>
                    </Link>
                  );
                })}
              </div>
            </Drawer>
            <nav>
              {this.getHeaderData().map(({ label, href, onClick }, idx) => (
                <Link
                  {...{
                    component: RouterLink,
                    to: href,
                    color: 'inherit',
                    style: { textDecoration: 'none' },
                    key: idx,
                    onClick: onClick,
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <SearchModal isOpen={isSearchOpen} closeSearch={this.closeSearch} />
          </Toolbar>
        </AppBar>{' '}
      </div>
    );
  }
}

export const MobileNav = withStyles(styles)(_MobileNav);
