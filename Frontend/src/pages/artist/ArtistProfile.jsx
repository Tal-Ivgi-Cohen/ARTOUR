import React from "react";
import { connect } from "react-redux";

import { ArtListByArtist} from "../../cmps/art/ArtList.jsx";
import { loadArts } from "../../store/art/art.action.js";
import { ArtistInfoModal } from "../../cmps/art/Modal.jsx";

// import { loadUser } from "../../store/user/user.action.js";


 export class _ArtistProfile extends React.Component {

state={
    currArtist:{}
}
componentDidMount(){
    console.log('this.props.artist',this.props.artist);
    this.props.loadArts();
    // this.props.loadUser();
}
findImgArtist=()=>{
   const artHiro = this.props.arts.find((art) => art.artist.fullname === this.props.artist.fullname)
    return artHiro.imgUrl
}

// findArtistUser=()=>{
//   //  לעשות פילטר ולחבר בין היוזרי איידי
//     // if(this.props.artist._id === this.props.user._id){
//     // this.setState({ currArtist: this.props.user._id})
//     // }
// }

    render(){
        const { artist } = this.props;
        return(
            <div className="main-artist">
          <div className="contianer-hiro">
             <img src={this.findImgArtist()} alt="" className="img-hiro-artist"/> 
             <div className="artist-hiro-title">
             <p>{artist.specializes}</p>
             <h1>{artist.fullname}</h1>
             </div>  
          </div>
            
            <div className="artist-details flex">
            <img src={artist.imgUrl} alt={artist.fullname}/>
            <div className="text-description flex column align-center">
            <h4>About {artist.fullname}</h4>
            <p>{artist.description}</p>
            <br/>
            <ArtistInfoModal artistInfo={artist.info} />
            </div>
            </div>
            <ArtListByArtist arts={this.props.arts} artist={this.props.artist.fullname}/> 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      arts: state.artModule.arts,
      artist: state.artModule.selectedArt.artist,
    //   user: state.userReducer.user
    }
}
  
  const mapDispatchToProps = {
    loadArts,
    // loadUser
  }
  export const ArtistProfile = connect(
    mapStateToProps,
    mapDispatchToProps
  )(_ArtistProfile);