import { ArtPreview } from './ArtPreview.jsx'
import { selectedArt } from '../store/art/art.action.js'


export function _ArtList({ arts}) {

    return (
        <section className="art-list">
            {arts.map(art => <ArtPreview selectedArt={this.props.selectedArt} art={art} key={art._id}  />)}
        </section>
    )
}


const mapStateToProps = (state) =>{

    return {
        arts: state.artModule.arts,
    }
}

const mapDispatchToProps = {
        selectedArt,
}

export const ArtList = connect(mapStateToProps,mapDispatchToProps)(_ArtList)

