import { ArtPreview } from './ArtPreview.jsx';

export function ArtList({ arts }) {

    return (
        <section className="art-list-container">
            <div className="art-list-title">
                <h1>All Art</h1>
            </div>
            <div className="art-list">
                {arts.map(art => <ArtPreview art={art} key={art._id} />)}
            </div>
        </section>
    )
}

export function ArtListByArtist({ arts }) {
    // const filteredArts = arts.filter(art => art.artist.fullname === artist)
    return (
        <section className="art-list">
            {arts.map(art => <ArtPreview art={art} key={art._id} />)}
        </section>
    )
}
