import React, { Fragment } from "react";
import { connect } from "react-redux";

import { ArtListByArtist} from "../../cmps/art/ArtList.jsx";
import { ArtistInfoModal } from "../../cmps/art/Modal.jsx";

import { loadArts } from "../../store/art/art.action.js";
import { loadUsers } from "../../store/user/user.action.js";


 export class _ArtistProfile extends React.Component {

state={
    currArtist:{}
}
componentDidMount(){
    console.log('this.props.artist',this.props.artist);
    console.log( this.props.loadUsers());
    this.props.loadArts();
}
findArtistUser=()=>{
  console.log(this.props.users);
  console.log(this.props.artist._id);
  const user = this.props.users.find((user)=> user._id === this.props.artist._id)
  console.log(('user',user));
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
            <p>{userArtist.description}</p>
            <br/>
            <ArtistInfoModal artistInfo={userArtist.info} />
            </div>
            </div>
            <ArtListByArtist arts={this.props.arts} artist={this.props.artist.fullname}/> 
            </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
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