import React from 'react';
import { Link } from 'react-router-dom';

export function ArtPreview({ art }) {
        return (
                <div className="art-preview flex">
                        <Link to={`/art/${art._id}`} >
                                <div className="content-img-card">
                                        <img src={art.imgUrl} alt="" />
                                </div>
                                <div className="content-card flex column">
                                        <p>Title: {art.title}</p>
                                        <p>Artist:{art.artist.fullname}</p>
                                        <p>Price: ${art.price}</p>
                                </div>
                        </Link>
                </div>
        )
}
