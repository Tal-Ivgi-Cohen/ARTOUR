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
    cart: [],
    note: '',
    quantity: 1
  }

  async componentDidMount() {
    const cart = await cartService.query()
    this.setState({ cart }, console.log('cart in artcart', this.state.cart))
  }

  onRemoveItem = async (itemId) => {
    let { cart } = this.state
    cart = await cartService.remove(itemId)
    this.setState({ cart })
  }

  handleChange = ({ target }) => {
    const value = target.value
    const field = target.name
    this.setState({ note: value })
  }

  onDecrease = () => {
    let { quantity } = this.state
    if (quantity <= 1) return
    quantity--
    this.setState({ quantity })
  }

  onIncrease = () => {
    let { quantity } = this.state
    quantity++
    this.setState({ quantity })
  }

  render() {
    const { cart, note, quantity } = this.state;
    const { user } = this.props;

    return (
      <section className="shoppingCart">

        <h1 className="cart-title">Shopping cart</h1>

        {user ? (
          <div className="cart-list">

            <Table>
              <TableHead className="list-head">
                <TableRow>
                  <TableCell colSpan="2">Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item, idx) => (
                  <TableRow key={`a${idx}`}>
                    <TableCell>
                      <img src={item.imgUrl} alt={item.title} className="cart-item-img" />
                    </TableCell>
                    <TableCell className="item-details">
                      <span className="item-title
                    ">{item.title}</span>
                      <span className="item-style">{item.style}</span>
                      <span>Size: {item.size.width}X{item.size.height}</span>
                      <button onClick={() => this.onRemoveItem(item._id)} className="remove-btn"> Remove </button>
                    </TableCell>
                    <TableCell>${item.price} </TableCell>
                    <TableCell>
                      <button className="dec-btn" onClick={this.onDecrease}>-</button>
                      <span className="quantity" >{quantity}</span>
                      <button className="inc-btn" onClick={this.onIncrease}>+</button>
                    </TableCell>
                    <TableCell>${item.price * quantity} </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="subtotal-order">
              Subtotal:
            </div>
          </div>
        ) : (
          <EmptyState className="empty-state" txt="Your bag is currently empty" />
        )}


        <div className="cart-actions">
          <div className="cart-note">
            <form>
              <h3>Add a Note:</h3>
              <textarea className="add-note" value={note} name="note" onChange={this.handleChange}></textarea>
            </form>
          </div>
          <div className="btn">
            <button><Link to={`/art`}> Continue shopping</Link></button>
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