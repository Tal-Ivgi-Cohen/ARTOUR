import { ArtPreview } from './ArtPreview.jsx';

export function ArtList({ arts }) {

    return (
        <section className="art-list">
            {arts.map(art => <ArtPreview art={art} key={art._id} />)}
        </section>
    )
}


export function ArtListByArtist({ arts , artist }) {

    const filteredArts = arts.filter(art => art.artist.fullname === artist)
return (
    <section className="art-list">
         {filteredArts.map(art => <ArtPreview art={art} key={art._id} />)}  
    </section>
    )
}
