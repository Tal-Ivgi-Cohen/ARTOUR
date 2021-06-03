import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
//import { Loader } from "../../cmps/util/Loader.jsx";
//import { Cart } from '../../cmps/art/Cart.jsx'
import { cartService } from '../../services/cart/cart.service.js'
import { removeCartItem } from '../../store/cart/cart.action.js'
import { Button } from '@material-ui/core';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { EmptyState } from '../../cmps/util/EmptyState.jsx';

class _ArtCart extends React.Component {

  state = {
    cart: []
  }

  async componentDidMount() {
    const cart = await cartService.query()
    this.setState({ cart }, console.log('cart in artcart', this.state.cart))
  }

  /*onRemoveItem() {
      const cart = cartService.query()
          .then(() => {
              this.setState({ cart: cart })
          })
  }

  onRemoveItem = (itemId) => {
      removeCartItem(itemId)
          .then(() => {
              console.log('Deleted Succesfully!');
              let { cart} = this.state
              cart = cart.filter(item => item._id !== itemId)
              this.setState({cart })
          })
  }*/


  render() {
    const { cart } = this.state;
    const { user, removeCartItem } = this.props;

    return (
      <section className="shoppingCart">

        <h1 className="cart-title">Shopping cart</h1>

        {user ? (
          <div className="cart-list">

          <Table>
            <TableHead className="list-head">
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, idx) => (
                <TableRow key={`a${idx}`}>
                  <TableCell>
                  <img src={item.imgUrl} alt={item.title} className="cart-item-img"/ >
                  {item.title}
                  </TableCell>
                  <TableCell>${item.price} </TableCell>
                  <TableCell>${item.price} </TableCell>
                  <TableCell>
                    <Button onClick={() => removeCartItem(item._id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
              </div>
        ) : (
          <EmptyState className="empty-state" txt="Your bag is currently empty" />
        )}


        <div className="cart-actions">
          <div className="cart-note">
            <form>
              <h3>Add a Note:</h3>
              <textarea className="add-note:" placeholder="" value="" ></textarea>
            </form>
          </div>
          <div className="btn">
            <button><Link to={`/art`}> Continue shopping</Link></button>
            <button>Update</button>
            <button><Link to={`/checkout`}> Check out</Link></button>
          </div>
        </div>
      </section>
    );

  }
}


function mapStateToProps({ userModule }) {
  return {
    user: userModule.loggedInUser,
  };
}

const mapDispatchToProps = {
  removeCartItem
};

export const ArtCart = connect(mapStateToProps, mapDispatchToProps)(_ArtCart);

/*render() {

    const { cart } = this.state;
    const { user, removeCartItem } = this.props;
    return(
    <section>
    <div className='user-cart'>
    <h3>Shopping Cart</h3>

    {user && (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan="2">Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell colSpan="2">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, idx) => (
            <TableRow key={`a${idx}`}>
              <TableCell>{item.title} </TableCell>
              <TableCell>{item.price} </TableCell>
              <TableCell>{item.price} </TableCell>
              <TableCell>
                <Button onClick={() => removeCartItem(item._id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )}
    </div>
    <div className="cart-actions">
                <div className="cart-note">
                    <form>
                        <h3>Add a Note:</h3>
                        <textarea className="add-note:" placeholder="" value="" ></textarea>
                    </form>
                </div>
                <div className="btn">
                    <button><Link to={`/art`}> Continue shopping</Link></button>
                    <button>Update</button>
                    <button><Link to={`/checkout`}> Check out</Link></button>
                </div>
            </div>
  </section>
    )
}*/