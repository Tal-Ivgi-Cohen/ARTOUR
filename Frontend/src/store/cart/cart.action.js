import { cartService } from '../../services/cart/cart.service.js'
import { userService } from '../../services/user/user.service.js'

export function loadCartItems(user) {
    return async dispatch => {
        try {
            const cartItems = await userService.updateUser(user);
            dispatch({ type: 'SET_CART_ITEMS', cartItems });
        } catch (err) {
           console.log('Art Actions: err in loaded Arts', err);
        }
    };
}

export function removeCartItem(cartItemId) {
    return async () => {
        try {
            await cartService.remove(cartItemId);
        } catch (err) {
          console.log('ArtActions: err in removeArt', err);
        }
    };
}

export function saveCartItem(cartItem) {
    return async () => {
        try {
            const cartItems = await cartService.add(cartItem);
        } catch (err) {
            console.log('CartActions: err in saveCart', err);
        }

    };
}

