import React from 'react'

export function ArtPreview({ selectedToy }) {


        return (
           <section>

                <h1>Logo</h1>

                <Button  className="btn-detials"onClick={()=>{
                selectedArt(art._id)}}> 
                <span><Link to={`/art/${art._id}`}> More Details</Link></span></Button>
           </section>
        )
}



