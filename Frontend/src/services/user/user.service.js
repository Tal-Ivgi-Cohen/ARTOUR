import { storageService } from './user-storage.service.js';

const STORAGE_KEY = 'user';

export const userService = {
    getLoggedInUser,
    getUserArts,
    getUserOrders,
    login,
    // logout,
    // signup,
    // getLoggedinUser,

};

function getLoggedInUser() {
    return storageService.getUser(STORAGE_KEY);
}
function getUserArts(userId) {
    console.log(' get arts of user', userId);
    return storageService.getArts(userId);
}
function getUserOrders(userId) {
    console.log(' get orders of user', userId);
    return storageService.getOrders(userId);
}

function login(username, password) {
    console.log('login', username, password);
    return storageService.login(username, password);
}