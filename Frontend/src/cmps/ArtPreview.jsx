import React from 'react'
const { Link } = ReactRouterDOM

export function ArtPreview({ art, selectedArt }) {

        return (
           <section>

            <article className="art-preview">
            <img src={art.imgUrl} alt="" />
            <p>{`Title: $${art.title}`}</p>
            <p>{`Artist: $${art.artist}`}</p>
            <p>{`Price: $${art.price}`}</p>
            <Link to={`/art/:artId`}> Details</Link>
            </article>

            <Button  className="btn-detials"onClick={()=>{
            selectedArt(art._id)}}> 
            <span><Link to={`/art/${art._id}`}> More Details</Link></span></Button>

           </section>
        )
}
