import React from 'react';
import { ArtForm } from '../../cmps/art/ArtForm.jsx';
import { connect } from 'react-redux';
import { setArt, saveArt } from '../../store/art/art.action.js';
import { Loader } from '../../cmps/util/Loader';

class _ArtEdit extends React.Component {
  async componentDidMount() {
    const { artId } = this.props.match.params;
    await this.props.setArt(artId);
  }

  render() {
    const { selectedArt, saveArt, history } = this.props;
    return selectedArt ? (
      <ArtForm selectedArt={selectedArt} saveArt={saveArt} history={history} />
    ) : (
      <Loader />
    );
  }
}

function mapStateToProps({ artModule }) {
  return {
    selectedArt: artModule.selectedArt,
  };
}

const mapDispatchToProps = {
  setArt,
  saveArt,
};

export const ArtEdit = connect(mapStateToProps, mapDispatchToProps)(_ArtEdit);
