import React from 'react'
import { connect } from 'react-redux'
import { selectedArt } from '../store/art/art.action.js'


// test url : 
// http://localhost:3000/#/art/a101

class _ArtDetails extends React.Component {

    componentDidMount() {
        const {artId} = this.props.match.params
        this.props.selectedArt(artId)
    }

    render() {

        return (
            <div className="main-art-details">

               {this.props.art && 
                <div>
                <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
                <div><img className="img-details" src={this.props.art.imgUrl} alt={`${this.props.art.title}`} /></div> 
                <h2>{this.props.art.title}</h2> 
                <p>Artist: {this.props.art.artist.fullname}</p>
                <p>material: {this.props.art.material}</p>
                <p>technique: {this.props.art.technique}</p>
                <p>style: {this.props.art.style}</p>
                <p>Price: {this.props.art.price}</p>
                </div> 
               }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        art: state.artModule.selectedArt
    }
}
const mapDispatchToProps = {
    selectedArt,
}
export const ArtDetails = connect(mapStateToProps,mapDispatchToProps)(_ArtDetails)