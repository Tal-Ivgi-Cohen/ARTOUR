import React from 'react';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';

export class Header extends React.Component {
  state = {
    isMobileView: false,
  };

  componentDidMount() {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? this.setState({ isMobileView: true })
        : this.setState({ isMobileView: false });
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setResponsiveness());
  }

  render() {
    const { isMobileView } = this.state;
    return isMobileView ? <MobileNav /> : <DesktopNav />;
  }
}

// const useStyles = makeStyles(() => ({
//   header: {
//     backgroundColor: '#400CCC',
//     paddingRight: '79px',
//     paddingLeft: '118px',
//     '@media (max-width: 900px)': {
//       paddingLeft: 0,
//     },
//   },
//   logo: {
//     fontFamily: 'Work Sans, sans-serif',
//     fontWeight: 600,
//     color: '#FFFEFE',
//     textAlign: 'left',
//   },
//   menuButton: {
//     fontFamily: 'Open Sans, sans-serif',
//     fontWeight: 700,
//     size: '18px',
//     marginLeft: '38px',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   drawerContainer: {
//     padding: '20px 30px',
//   },
// }));
