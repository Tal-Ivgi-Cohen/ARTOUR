import React from 'react'
import { Link } from 'react-router-dom';


export class ArtCart extends React.Component {

    render() {
        return (
            <section>
                <div className="art-cart-details">
                    <h3>Here will be a table with all the products</h3>


                </div>
                <form>
                    <h3>Add a Note:</h3>
                    <textarea className="add-note:" placeholder="" value="" ></textarea>
                </form>
                <div className="btn">
                    <button><Link to={`/art`}> Continue shopping</Link></button>
                    <button>Update</button>
                    <button><Link to={`/checkout`}> Check out</Link></button>
                </div>
            </section>
        )
    }
}