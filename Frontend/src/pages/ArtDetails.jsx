import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setArt } from '../store/art/art.action.js';
import { Loader } from '../cmps/Loader.jsx';

// test url :
// http://localhost:3000/#/art/a101

class _ArtDetails extends React.Component {
  componentDidMount() {
    const { artId } = this.props.match.params;
    this.props.setArt(artId);
    console.log('art in details', this.props.selectedArt);
  }

  render() {
    const { selectedArt } = this.props;
    if (!selectedArt) return <Loader />;
    return (
      <div className='main-art-details'>
        {selectedArt && (
          <div>
            <button
              className='btn-back'
              onClick={() => this.props.history.push('/art')}
            >
              Go Back
            </button>
            <Link to={`/art/edit/${selectedArt._id}`}>details</Link>
            <div>
              <img
                className='img-details'
                src={selectedArt.imgUrl}
                alt={`${selectedArt.title}`}
              />
            </div>
            <h2>{selectedArt.title}</h2>
            <p>Artist: {selectedArt.artist?.fullname || ''}</p>
            <p>material: {selectedArt.material}</p>
            <p>technique: {selectedArt.technique}</p>
            <p>style: {selectedArt.style}</p>
            <p>Price: {selectedArt.price}</p>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedArt: state.artModule.selectedArt,
  };
};

const mapDispatchToProps = {
  setArt,
};
export const ArtDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ArtDetails);
