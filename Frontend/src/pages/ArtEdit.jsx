import React from 'react';
import { ArtForm } from '../cmps/ArtForm';
import { connect } from 'react-redux';
import { selectedArt } from '../store/art/art.action.js';
import {Loader} from '../cmps/Loader';

class _ArtEdit extends React.Component {
  componentDidMount() {
    const { artId } = this.props.match.params;
    this.props.selectedArt(artId);
  }

  render() {
    const { art } = this.props;
    console.log(art);
    return ( art? 
    <ArtForm art={art} />: <Loader/>)
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
