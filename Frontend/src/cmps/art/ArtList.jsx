import { ArtPreview } from './ArtPreview.jsx';

export function ArtList({ arts }) {

    return (
        <section className="art-list">
            {arts.map(art => <ArtPreview art={art} key={art._id} />)}
        </section>
    )
}

export function ArtListByArtist({ arts , artist }) {

return (
    <section className="art-list">
        
           {()=>{
               console.log('artistArts',artistArts);
            const artistArts =  arts.filter((art) =>{
               return (art.artist.fullname === artist)
            })
          return artistArts.map(art => <ArtPreview art={art} key={art._id} />)
            }
    }
        
            <h1>test</h1>
    </section>
    )
}
