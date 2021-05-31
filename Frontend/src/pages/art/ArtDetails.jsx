import React from "react";
import { connect } from "react-redux";
import { setArt, removeArt, loadArts } from "../../store/art/art.action.js";
import { Loader } from "../../cmps/util/Loader.jsx";
import { ArtListByArtist } from "../../cmps/art/ArtList.jsx";
import { PurchaseModal, WishListModal } from "../../cmps/Modal.jsx";

// test url :
// http://localhost:3000/#/art/a101

class _ArtDetails extends React.Component {
  state = {
    frame: "none-border",
  };

  componentDidMount() {
    const { artId } = this.props.match.params;
    this.props.setArt(artId);
    console.log("art in details", this.props.selectedArt);
  }

  handleChange = (ev) => {
    const frameOption = ev.target.value;
    this.setState({ frame: frameOption });
  };

  render() {
    const { arts } = this.props;
    const { selectedArt } = this.props;
    if (!selectedArt) return <Loader />;

    return (
      <div>
        {selectedArt && (
          <section className="main-art-details">
            <div className="content-img">
              <button
                className="btn-back"
                onClick={() => this.props.history.push("/art")}
              >
                Go Back
              </button>

              <div className="img-details flex">
                <img
                  className={`${this.state.frame}`}
                  src={selectedArt.imgUrl}
                  alt={`${selectedArt.title}`}
                />
              </div>
            </div>

            <div className="content-txt">
              <div className="art-details">
                <p>{selectedArt.artist?.fullname || ""}</p>
                <h1>{selectedArt.title}</h1>
                <p>
                  {selectedArt.style} , {selectedArt.material} ,{" "}
                  {selectedArt.technique}
                </p>
                <p>${selectedArt.price}</p>
                <p> Size {selectedArt.size.height}/{selectedArt.size.width}</p>
              </div>

              <div className="frame">
                <h5>Frame</h5>
                <div className="radio-buttons flex column">
                  <div className="unframed-radio flex">
                    <input
                      id="unframed"
                      value="unframed"
                      name="frame"
                      type="radio"
                      onChange={this.handleChange}
                    />
                    <label for="unframed">Unframed</label>
                  </div>
                  <div className="bright-radio flex">
                    <input
                      id="bright"
                      value="bright"
                      name="frame"
                      type="radio"
                      onChange={this.handleChange}
                    />
                    <label for="bright">Bright</label>
                  </div>
                  <div className="dark-radio flex">
                    <input
                      id="dark"
                      value="dark"
                      name="frame"
                      type="radio"
                      onChange={this.handleChange}
                    />
                    <label for="dark">Dark</label>
                  </div>
                  <div className="black-radio flex">
                    <input
                      id="black"
                      value="black"
                      name="frame"
                      type="radio"
                      onChange={this.handleChange}
                    />
                    <label for="black">Black</label>
                  </div>
                </div>
              </div>
              <div className="details-modals">
              <PurchaseModal selectedArt={selectedArt} />
              <WishListModal selectedArt={selectedArt} />
              </div>
              <br />
              <p>DESCRIPTION</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aperiam porro tempora modi expedita, sapiente impedit
                pariatur dignissimos similique rerum natus aliquid dicta
                recusandae iste veritatis ducimus quaerat ipsam non!
              </p>
              <ArtListByArtist
                arts={arts}
                artist={selectedArt.artist.fullname}
              />
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedArt: state.artModule.selectedArt,
    arts: state.artModule.arts,
  };
};

const mapDispatchToProps = {
  setArt,
  // removeArt,
  loadArts,
};
export const ArtDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ArtDetails);
