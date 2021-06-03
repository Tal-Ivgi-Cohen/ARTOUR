import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { setArt, loadArts } from "../../store/art/art.action.js";
import { Loader } from "../../cmps/util/Loader.jsx";
// import { ArtistProfile } from "../../pages/artist/ArtistProfile.jsx";

import { ArtListByArtist } from "../../cmps/art/ArtList.jsx";
import { PurchaseModal, WishListModal } from "../../cmps/art/Modal.jsx";
import { saveCartItem } from "../../store/cart/cart.action.js";


// test url :
// http://localhost:3000/#/art/a101

class _ArtDetails extends React.Component {
  state = {
    frame: "none-border"
  };

  componentDidMount() {
    const { artId } = this.props.match.params;
    const { setArt, loadArts } = this.props
    setArt(artId)
    loadArts();
  }

  handleChange = (ev) => {
    const frameOption = ev.target.value;
    this.setState({ frame: frameOption });
  };

  render() {

    const { selectedArt, saveCartItem, loggedInUser } = this.props;
    if (!selectedArt) return <Loader />;
    const { arts } = this.props;

    return (
      <div>
        <button className="btn-back" onClick={() => this.props.history.push("/art")}>Go Back</button>
        {selectedArt && (
          <div className="main">
            <section className="main-art-details flex">

              <div className="imgs flex">
                <div className="content-img">

                  <div className="container-img">
                    <img src="https://d3t95n9c6zzriw.cloudfront.net/static/img/view_in_a_room_2019_2b.jpg" className="img1" alt={selectedArt.imgUrl} />
                    <img src={selectedArt.imgUrl} className="img2" alt={selectedArt.imgUrl} />
                  </div>
                </div>
                <div className="img-details">
                  <img className={`${this.state.frame}`} src={selectedArt.imgUrl} alt={`${selectedArt.title}`} />
                </div>
              </div>

              <div className="content-txt">
                <div className="art-details">
                  <p>{selectedArt.artist?.fullname || ""}</p>
                  <h1>{selectedArt.title}</h1>
                  <p>
                    {selectedArt.style} ,{selectedArt.technique} on {selectedArt.material} {" "}

                  </p>
                  <p>${selectedArt.price}</p>
                  <p> Size {selectedArt.size.height}/{selectedArt.size.width}</p>
                </div>

                <div className="frame">
                  <h5>Frame</h5>
                  <div className="radio-buttons flex column">
                    <div className="unframed-radio flex">
                      <input id="unframed" value="unframed" name="frame" type="radio" onChange={this.handleChange} />
                      <label for="unframed">Unframed</label>
                    </div>

                    <div className="bright-radio flex">
                      <input id="bright" value="bright" name="frame" type="radio" onChange={this.handleChange} />
                      <label for="bright">Bright</label>
                    </div>

                    <div className="dark-radio flex">
                      <input id="dark" value="dark" name="frame" type="radio" onChange={this.handleChange} />
                      <label for="dark">Dark</label>
                    </div>

                    <div className="black-radio flex">
                      <input id="black" value="black" name="frame" type="radio" onChange={this.handleChange} />
                      <label for="black">Black</label>
                    </div>
                  </div>
                </div>

                <div className="details-modals">
                  <PurchaseModal selectedArt={selectedArt} saveCartItem={saveCartItem} loggedInUser={loggedInUser} />
                  <WishListModal selectedArt={selectedArt} />
                </div>
                <br />
                <p>DESCRIPTION</p>
                <br />
                <p>{selectedArt.description}</p>
              </div>
            </section>
          </div>
        )
        }
        <div className="artist-list-details flex space-between">
          <Link to={`/artist/${selectedArt.artist.id}`}> <button>More work by {selectedArt.artist.fullname}</button></Link>
          <ArtListByArtist arts={arts} artist={selectedArt.artist.fullname} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedArt: state.artModule.selectedArt,
    arts: state.artModule.arts,
    loggedInUser: state.userModule.loggedInUser,
    cartItem: state.userModule.cartItem
  };
};

const mapDispatchToProps = {
  setArt,
  loadArts,
  saveCartItem,
};
export const ArtDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ArtDetails);
