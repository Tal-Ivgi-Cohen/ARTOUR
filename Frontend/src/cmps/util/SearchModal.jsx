import React, { Component } from 'react';
import { IconButton, Modal, TextField, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const styles = () => ({
  modal: {
    backgroundColor: '#f4f2e8',
    color: 'black',
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateRows: 'auto 1fr 1fr',
  },
  closeBtn: {
    justifySelf: 'start',
    width: 'fit-content',
    height: 'fit-content',
  },
  modalContent: {
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    justifySelf: 'center',
    marginTop: '5%',
    justifyItems: 'center',
    width: '100%',
    maxWidth: '800px',
    height: '100%',
  },
  searchInput: {
    width: '100%',
    height: 'fit-content',
    padding: '10px',
    outline: 'none',
  },
  quickSearchLinks: {
    alignSelf: 'center',
    fontSize: '60px',
    fontFamily: 'goldenbook',
    textAlign: 'center',
  },
});

class _SearchModal extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ search: value }, () => {
      //TODO: debounce and then search
    });
  };

  close = () => {
    this.setState({ search: '' }, () => this.props.closeSearch());
  };
  render() {
    const { isOpen, classes } = this.props;
    const { search } = this.state;
    return (
      <div className='search-modal'>
        <Modal
          open={isOpen}
          onClose={this.close}
          aria-describedby='modal-content'
        >
          <div id='modal' className={classes.modal}>
            <IconButton onClick={this.close} className={classes.closeBtn}>
              <CloseIcon />
            </IconButton>
            <div className={classes.modalContent}>
              <TextField
                label='Search'
                name='search'
                value={search}
                autoFocus
                onChange={this.handleChange}
                className={classes.searchInput}
                inputProps={{
                  autocomplete: 'off',
                }}
              />
              <h4>Browse Artworks</h4>
              <section className={classes.quickSearchLinks}>
                <Link to='#'>PHOTOGRAPHY</Link> | <Link to='#'>PAINTING</Link> |{' '}
                <Link to='#'>MINIMAL</Link> | <Link to='#'>GEOMETRIC</Link> |{' '}
                <Link to='#'>PASTELS</Link> | <Link to='#'>COLORFUL</Link>
              </section>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export const SearchModal = withStyles(styles)(_SearchModal);
