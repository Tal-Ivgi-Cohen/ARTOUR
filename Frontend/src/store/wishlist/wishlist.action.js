import { wishlistService } from '../../services/wishlist/wishlist.service.js'

export function removeWishItem(wishItemId) {
    return async () => {
        try {
            await wishlistService.remove(wishItemId);
        } catch (err) {
            console.log('ArtActions: err in removeArt', err);
        }
    };
}
export function saveWishItem(wishItem) {
    return async () => {
        try {
            const wishItems = await wishlistService.add(wishItem);
        } catch (err) {
           console.log('CartActions: err in saveCart', err);
        }

    };
}
