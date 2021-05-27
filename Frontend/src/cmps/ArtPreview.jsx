const { Link } = ReactRouterDOM

export function ArtPreview({ art}) {

    return (
        <article className="art-preview">
        <img src={art.imgUrl} alt="" />
        <p>{`Title: $${art.title}`}</p>
        <p>{`Artist: $${art.artist}`}</p>
        <p>{`Price: $${art.price}`}</p>
        <Link to={`/art/:artId`}> Details</Link>
    </article>
    )
}
