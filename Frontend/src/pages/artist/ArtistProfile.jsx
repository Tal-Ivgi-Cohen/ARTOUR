import React, { Fragment } from "react";
import { connect } from "react-redux";

import { ArtList } from "../../cmps/art/ArtList.jsx";
import { LongTxt } from "../../cmps/util/LongTxt.jsx"

import { loadArts } from "../../store/art/art.action.js";
import { loadUsers } from "../../store/user/user.action.js";


 export class _ArtistProfile extends React.Component {

state={
    currArtist:{},
    filterBy: {
      artistId: "",
    }
}
 componentDidMount(){
    const { loadArts } = this.props;
    const { selectedArt } = this.props;
    const { _id, artist } = selectedArt;
    const filterBy = {
      _id,
      artistId: artist._id,
    };
    this.setState({ filterBy }, () => {
      loadArts(this.state.filterBy);
    });
}
findArtistUser=()=>{
  const user = this.props.users.find((user)=> user._id === this.props.artist._id)
  return user
}

    render(){
        const { artist } = this.props;
        const userArtist = this.findArtistUser()
        
        return(
          <Fragment>
          <div className="contianer-hero">
             <img src={userArtist.imgHero} alt="" className="img-hero-artist"/> 
             <div className="artist-hero-title">
            <p>{userArtist.specializes}</p>
             <h1>{userArtist.fullname}</h1>
             </div>  
          </div>
            <div className="main-artist">
            
            <div className="artist-details flex">
            <img src={userArtist.imgUrl} alt={artist.fullname}/>
            <div className="text-description flex column align-center">
            <h4>About {userArtist.fullname}</h4>
            <p><LongTxt description={userArtist.description} /></p>
            <br/>
            </div>
            </div>
            <ArtList arts={this.props.arts} artist={this.props.artist.fullname}/> 
            </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      selectedArt: state.artModule.selectedArt,
      arts: state.artModule.arts,
      artist: state.artModule.selectedArt.artist,
      users: state.userModule.users
    }
}
  
  const mapDispatchToProps = {
    loadUsers,
    loadArts,
  }
  export const ArtistProfile = connect(
    mapStateToProps,
    mapDispatchToProps
  )(_ArtistProfile);
