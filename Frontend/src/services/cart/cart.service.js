import { storageService } from './cart-storage.service.js';

const STORAGE_KEY = 'shoppingCart';

export const cartService = {
    query,
    //getById,
    //save,
    remove,
    add,

};

async function query() {
    return await storageService.query(STORAGE_KEY);
}
/*async function getById(artId) {
    console.log(' get art service from', artId);
    return await storageService.get('arts', artId);
}*/
async function remove(itemId) {
   // return await storageService.remove(STORAGE_KEY, itemId);
   const cart = await storageService.remove(STORAGE_KEY, itemId)
   return cart
}
async function add(item) {
    const cart = await storageService.post(STORAGE_KEY, item)
    return cart
    // localStorage.setItem('shoppingCart', cart)
}
/*async function save(item) {
    console.log('item in service', item);
    if (item._id) {
        console.log('putting')
        return await storageService.put(STORAGE_KEY, item);
    } else {
        console.log('posting')
        return await storageService.post(STORAGE_KEY, item);
    }
}*/