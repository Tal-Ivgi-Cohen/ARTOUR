import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { selectedArt ,removeArt } from '../store/art/art.action.js'

//material-ui
// import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


// test url : 
// http://localhost:3000/#/art/a101

class _ArtDetails extends React.Component {

    componentDidMount() {
        const {artId} = this.props.match.params
        this.props.selectedArt(artId)
    }

    render() {

        return (
                <Fragment>

               {this.props.art && 
                <section className="main-art-details">
                <div className="content-img">
                <button className="btn-back" onClick={() => this.props.history.push('/art')}>Go Back</button>
                <img className="img-details flex" src={this.props.art.imgUrl} alt={`${this.props.art.title}`} />
                </div>
                <div className="content-txt">
                <h2>{this.props.art.title}</h2> 
                <p>Artist: {this.props.art.artist.fullname}</p>
                <p>material: {this.props.art.material}</p>
                <p>technique: {this.props.art.technique}</p>
                <p>style: {this.props.art.style}</p>
                <p>Price: {this.props.art.price}</p>

                <button className="btn-remove" onClick={()=>{
                this.props.removeArt(this.props.art._id)
                this.props.history.push('/art')
                }}>Delete</button>

                </div>
               </section>
               }

            </Fragment>
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
    removeArt
}
export const ArtDetails = connect(mapStateToProps,mapDispatchToProps)(_ArtDetails)