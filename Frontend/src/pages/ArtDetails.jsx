import React from 'react'
import { connect } from 'react-redux'


export class _ArtDetails extends React.Component {

componentDidMount(){
        console.log('art details',this.props.art);
}

    render() {
        return (
            <div className="main-art-details">

                {/* <Button className="btn-back" onClick={() => this.props.history.push('/art')}></Button>
                <div><img className="img-details" src={this.props.art.imgUrl} alt={`${this.props.art.title}`} /></div>
                <h2>{this.props.art.preview.preview-title}</h2>
                <p>Artist: {this.props.art.artist.name}</p> 
                <p>material: {this.props.art.preview.art-details.material}</p> 
                <p>technique: {this.props.art.preview.art-details.technique}</p> 
                <p>style: {this.props.art.preview.art-details.style}</p> 
                <p>Price: {this.props.art.price}</p> 
               <div>Reviews cmp</div> */}
               <h1>pppp</h1>
           </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        art: state.artModule.selectedArt,
    }
}
export const ArtDetails = connect(mapStateToProps)(_ArtDetails)