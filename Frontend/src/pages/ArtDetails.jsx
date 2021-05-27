import React from 'react'
import { connect } from 'react-redux'

// test url : 
// http://localhost:3000/#/art/a101

export class _ArtDetails extends React.Component {

componentDidMount(){
    console.log(' details');
        console.log('art details',this.props.art);
}

    render() {
        return (
            <div className="main-art-details">
            <h1>Details</h1>
            <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
                 <div><img className="img-details" src={this.props.art.imgUrl} alt={`${this.props.art.title}`} /></div> 
                <h2>{this.props.art.title}</h2>
                <p>Artist: {this.props.art.artist.fullname}</p> 
                <p>material: {this.props.art.material}</p> 
                <p>technique: {this.props.art.technique}</p> 
                <p>style: {this.props.art.style}</p> 
                <p>Price: {this.props.art.price}</p> 
               <div>Reviews cmp</div>
           </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        // art: state.artModule.selectedArt,
        art:{
            "_id": "a101",
            "title": "The Sky runner",
            "price": 120,
            "imgUrl": "/img/img1.jpg",
            "material": "Canvas",
            "technique": "Oil",
            "category": "Photograph",
            "style": "abstract",
            "color": "red",
            "artist": {
              "id": "_u101",
              "fullname": "Tair Bitan",
              "imgUrl": "/img/img2.jpg"
            },
            "reviews": [
              {
                "_id": "r102",
                "txt": "looks great..",
                "rate": 4,
                "author": {
                  "_id": "u102",
                  "fullname": "user2",
                  "imgUrl": "/img/img2.jpg"
                }
              }
            ]
          }
    }
}
export const ArtDetails = connect(mapStateToProps)(_ArtDetails)