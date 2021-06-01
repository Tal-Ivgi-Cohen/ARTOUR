
import { storageService } from './user-storage.service';

const STORAGE_KEY = 'user';
export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    // getUsers,
    // getById,
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

// function getUsers() {
//     return storageService.query('user')
//     // return httpService.get(`user`)
// }

// function getById(userId) {
//     return storageService.get('user', userId)
//     // return httpService.get(`user/${userId}`)
// }
// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

// async function update(user) {
//     return storageService.put('user', user)
//     // user = await httpService.put(`user/${user._id}`, user)
//     // Handle case in which admin updates other user's details
//     if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
// }