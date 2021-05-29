import { ArtPreview } from './ArtPreview.jsx';

export function ArtList({ arts }) {
  // console.log('Arts', arts);

  return (
    <section className='art-list'>
      {arts.map((art) => (
        <ArtPreview art={art} key={art._id} />
      ))}
    </section>
  );
}
