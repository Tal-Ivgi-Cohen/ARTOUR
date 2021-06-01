
import { storageService } from './user-storage.service';

const STORAGE_KEY = 'user';
export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    query,
    updateUser,
    // remove,
    // update,
    // increaseScore
};


async function login(credentials) {
    try {
        return await storageService.login(credentials);
    } catch (err) {
        throw err;
    }
}

async function signup(userInfo) {
    try {
        const user = await storageService.signup(userInfo);
        return user;
    } catch (err) {
        throw err;
    }
}

async function logout() {
    try {
        return await storageService.logout(STORAGE_KEY);
    } catch (err) {
        throw err;
    }
}


async function getLoggedInUser() {
    return await storageService.getUser();
}

async function query() {
    return await storageService.query(STORAGE_KEY);
}



// function getById(userId) {
//     return storageService.get('user', userId)
//     // return httpService.get(`user/${userId}`)
// }
// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

async function updateUser(user) {
    return storageService.updateUser(user);
}

