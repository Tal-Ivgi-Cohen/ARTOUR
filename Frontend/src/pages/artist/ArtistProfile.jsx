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
   ;
    console.log( this.props.loadUsers());
    this.props.loadArts();
}
findImgArtist=()=>{
   const artHiro = this.props.arts.find((art) => art.artist.fullname === this.props.artist.fullname)
    return artHiro.imgUrl
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
          <div className="contianer-hiro">
             {/* <img src={this.findImgArtist()} alt="" className="img-hiro-artist"/>  */}
             <div className="artist-hiro-title">
               <h1>test</h1>
               <p> {this.props.users[0].kkk}</p>
               {/* <p>{userArtist.fullname}</p> */}
             {/* <p>{artist.specializes}</p>
             <h1>{artist.fullname}</h1> */}
             </div>  
          </div>
            <div className="main-artist">
            
            <div className="artist-details flex">
            {/* <img src={artist.imgUrl} alt={artist.fullname}/> */}
            <div className="text-description flex column align-center">
            {/* <h4>About {artist.fullname}</h4> */}
            {/* <p>{artist.description}</p> */}
            <br/>
            {/* <ArtistInfoModal artistInfo={artist.info} /> */}
            </div>
            </div>
            {/* <ArtListByArtist arts={this.props.arts} artist={this.props.artist.fullname}/>  */}
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