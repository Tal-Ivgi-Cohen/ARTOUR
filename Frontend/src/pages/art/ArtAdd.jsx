import React from 'react';
import { connect } from 'react-redux';
import { ArtForm } from '../../cmps/art/ArtForm';
import { saveArt } from '../../store/art/art.action.js';

function _ArtAdd({ history, user }) {
  return <ArtForm history={history} saveArt={saveArt} user={user} />;
}

function mapStateToProps({ userModule }) {
  return {
    user: userModule.user,
  };
}

const mapDispatchToProps = {
  saveArt,
};

export const ArtAdd = connect(mapStateToProps, mapDispatchToProps)(_ArtAdd);
