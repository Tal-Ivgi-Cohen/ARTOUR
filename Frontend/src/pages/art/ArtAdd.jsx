import React from 'react';
import { connect } from 'react-redux';
import { ArtForm } from '../../cmps/art/ArtForm';
import { saveArt } from '../../store/art/art.action.js';

function _ArtAdd({ history }) {
  return <ArtForm history={history} saveArt={saveArt} />;
}

const mapDispatchToProps = {
  saveArt,
};

export const ArtAdd = connect(null, mapDispatchToProps)(_ArtAdd);
