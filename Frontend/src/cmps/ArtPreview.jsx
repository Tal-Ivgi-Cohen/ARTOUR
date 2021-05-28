import React from 'react'
import { Link } from 'react-router-dom'

export function ArtPreview({ art, selectedArt }) {
        return (
                <section>
                        <article className="art-preview">
                                <img src={art.imgUrl} alt="" />
                                <p>{`Title: ${art.title}`}</p>
                                <p>{`Artist: ${art.artist}`}</p>
                                <p>{`Price: $${art.price}`}</p>
                                <button className="btn-detials" onClick={() => {
                                        selectedArt(art._id)}}>
                                        <span><Link to={`/art/${art._id}`}> More Details</Link></span>
                                </button>
                        </article>
                </section>
        )
}
