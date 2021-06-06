import { ArtPreview } from './ArtPreview.jsx';

export function ArtList({ arts }) {

    return (
        <section className="art-list-container">
            <div className="art-list-title">
            </div>
            <div className="art-list">
                {arts.map(art => <ArtPreview art={art} key={art._id} />)}
            </div>
        </section>
    )
}

