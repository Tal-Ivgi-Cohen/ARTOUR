import React from 'react';
import { ArtForm } from '../cmps/ArtForm';
import { connect } from 'react-redux';
import { selectedArt } from '../store/art/art.action.js';

class _ArtEdit extends React.Component {
  state = { art: null };

  componentDidMount() {
    this.loadSelectedArt();
  }

  loadSelectedArt() {
    const id = this.props.match.params.artId;
    const art = this.props.selectedArt(id);
    this.setState({ art: art });
  }
  render() {
    const { art } = this.props;
    console.log(art);
    return <ArtForm art={art} />;
  }
}

function mapStateToProps({ artModule }) {
  return {
    art: artModule.selectedArt,
  };
}

const mapDispatchToProps = {
  selectedArt,
};

export const ArtEdit = connect(mapStateToProps, mapDispatchToProps)(_ArtEdit);
