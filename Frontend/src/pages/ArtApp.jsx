import { connect } from 'react-redux'
import  React  from 'react'
import { ArtList } from '../cmps/ArtList.jsx'
import { loadArts} from '../store/art/art.action.js'

class _ArtApp extends React.Component {

    componentDidMount() {
        console.log('Hiiiiiiiiiii')
        this.props.loadArts()
    }
    render() {
        // const { arts } = this.props
        return (
            <div className="art-container">
            <h1>ArtApp</h1>

            <section className="container art-app">
            <ArtList arts={arts} />
            </section>
            </div>
        )
    }
}

function mapStateToProps({ artModule }) {
    return {
        // arts: artModule.arts,
    }
}

const mapDispatchToProps = {
    loadArts,
}

export const ArtApp = connect(mapStateToProps, mapDispatchToProps)(_ArtApp)