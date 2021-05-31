import React from 'react';
import { connect } from 'react-redux';
import { setArt, removeArt } from '../../store/art/art.action.js';
import { Loader } from '../../cmps/util/Loader.jsx';
import { PurchaseModal } from '../../cmps/art/Modal.jsx'
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
      <div>
        {selectedArt &&
          <section className="main-art-details">
            <div className="content-img">
              <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
              <img className="img-details flex" src={selectedArt.imgUrl} alt={`${selectedArt.title}`} />
            </div>
            <div className="content-txt">
              <h2>{selectedArt.title}</h2>
              <p>Artist: {selectedArt.artist?.fullname || ''}</p>
              <p>material: {selectedArt.material}</p>
              <p>technique: {selectedArt.technique}</p>
              <p>style: {selectedArt.style}</p>
              <p>Price: {selectedArt.price}</p>
              <PurchaseModal selectedArt={selectedArt} />

            </div>
          </section>
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    selectedArt: state.artModule.selectedArt,
  };
};

const mapDispatchToProps = {
  setArt,
  removeArt,
};
export const ArtDetails = connect(mapStateToProps, mapDispatchToProps)(_ArtDetails);
