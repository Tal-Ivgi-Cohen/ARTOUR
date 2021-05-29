import React from 'react';
import { Link } from 'react-router-dom';

export function ArtPreview({ art }) {
  // console.log('Art', art);
  return (
    <Link to={`/art/${art._id}`}>
      <div className='art-preview'>
        <img src={art.imgUrl} alt='' />
        <p>Title: {art.title}</p>
        <p>Artist:{art.artist.fullname}</p>
        <p>Price: ${art.price}</p>
      </div>
    </Link>
  );
}
