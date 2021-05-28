import React from 'react'
import { artService } from '../services/art.service.js'
// import { connect } from 'react-redux'
// import { selectedArt } from '../store/art/art.action.js'


// test url : 
// http://localhost:3000/#/art/a101

 export class ArtDetails extends React.Component {

    state={
        // art: this.props.art
        art: {}
    }
    componentDidMount() {
        const {artId} = this.props.match.params
        // this.props.selectedArt(artId).then(art=>{
        // this.setState({art})
        // console.log('art',art);
    // })
        artService.getById(artId).then(art=>{
        this.setState({art})
        })
    }

    render() {
        const { art } = this.state
        return (
            <div className="main-art-details">
                <h1>Details</h1>
                {/* <h3>{this.props.art.title}</h3> */}

                {/* <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
                <div><img className="img-details" src={this.props.art.imgUrl} alt={`${this.props.art.title}`} /></div>
                <h2>{this.props.art.title}</h2>
                <p>Artist: {this.props.art.artist.fullname}</p>
                <p>material: {this.props.art.material}</p>
                <p>technique: {this.props.art.technique}</p>
                <p>style: {this.props.art.style}</p>
                <p>Price: {this.props.art.price}</p>
                <div>Reviews cmp</div>  */}

            <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
                <div><img className="img-details" src={art.imgUrl} alt={`${art.title}`} /></div>
                <h2>{art.title}</h2>
                {/* <p>Artist:{art.artist.fullname}</p>                <p>material: {art.material}</p> */}
                <p>technique: {art.technique}</p>
                <p>style: {art.style}</p>
                <p>Price: {art.price}</p>
                {/* <div>Reviews cmp</div>  */}
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         art: state.artModule.selectedArt
//     }
// }

// const mapDispatchToProps = {
//     selectedArt,
// }
// export const ArtDetails = connect(mapStateToProps,mapDispatchToProps)(_ArtDetails)