import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Loader } from "../../cmps/util/Loader.jsx";
import { Cart } from '../../cmps/art/Cart.jsx'


class _ArtCart extends React.Component {

    componentDidMount() {
        console.log('user:', this.props.user)
    }


    render() {

        const { user } = this.props;

        if (!user) return <Loader />;
        const { shoppingCart } = this.props.user;

        return (
            <section>
                {user && (
                    <div>
                        <table className="cart-list">
                            <thead>
                                <tr>
                                    <td colspan="3">Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCart.map(item => <Cart item={item} key={item._id} />)}
                            </tbody>
                        </table>
                    </div>
                )}
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
        );

    }
}


function mapStateToProps({ userModule }) {
    return {
        user: userModule.user,
    };
}

const mapDispatchToProps = {
    //loadArts,
};

export const ArtCart = connect(mapStateToProps, mapDispatchToProps)(_ArtCart);
