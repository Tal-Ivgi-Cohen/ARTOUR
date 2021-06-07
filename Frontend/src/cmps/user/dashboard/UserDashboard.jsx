import React, { Component } from 'react';
import { UserArts } from './UserArts.jsx';
import { UserOrders } from './UserOrders.jsx';
import { UserDetails } from './UserDetails.jsx';
import { artService } from '../../../services/art/art.service.js'

export class UserDashboard extends Component {
  state = {
    currTab: 'details',
    arts: []
  };

  async componentDidMount() {
    const { tab } = this.props;
    if (tab) {
      this.setState({ currTab: tab });
    }
    await this.setArts()
  }

  setArts = async () => {
    const arts = []
    await this.props.userOrders.forEach(async order => {
      const art = await artService.getById(order.artId)
      arts.push(art)
    })
    this.setState({ arts })
  }

  setCurrTab = (tab) => {
    this.setState({ currTab: tab });
    this.props.history.push(`/account/${tab}`);
  };
  getCurrTab = () => {
    const { currTab, arts } = this.state;
    const { user, userArts, userOrders, removeArt, updateUser } = this.props;
    switch (currTab) {
      case 'details':
        return <UserDetails user={user} updateUser={updateUser} />;
      case 'arts':
        return <UserArts arts={userArts} removeArt={removeArt} />;
      case 'orders':
        return <UserOrders arts={arts} />;
      default:
        return <UserDetails user={user} updateUser={updateUser} />;
    }
  };




  render() {
    const { user, logout } = this.props;
    const { currTab } = this.state;
    return (
      <div className='user-dashboard'>
        <section className='tabs'>
          <ul>
            <li
              onClick={() => this.setCurrTab('details')}
              className={currTab === 'details' ? 'active' : ''}
            >
              User Details
            </li>
            {user.isArtist && (
              <li
                onClick={() => this.setCurrTab('arts')}
                className={currTab === 'arts' ? 'active' : ''}
              >
                User Arts
              </li>
            )}
            <li
              onClick={() => this.setCurrTab('orders')}
              className={currTab === 'orders' ? 'active' : ''}
            >
              User Orders
            </li>
            <li onClick={() => logout()}>Logout</li>
          </ul>
        </section>
        <section className='tab-container'>
          {this.getCurrTab()}
        </section>
      </div>
    );
  }
}
