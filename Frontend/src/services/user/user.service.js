
import { storageService } from './user-storage.service';

const STORAGE_KEY = 'users';
export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    query,
    updateUser,
    resetPassword,
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
    console.log('service user');
    return await storageService.query(STORAGE_KEY);
}

async function resetPassword(email, password) {
    return await storageService.resetPassword(email, password);
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

