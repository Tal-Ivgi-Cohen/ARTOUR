import { storageService } from './user-storage.service'
import { httpService } from '../http.service'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    query,
    updateUser,
    resetPassword,
};

window.userService = userService

async function login(credentials) {
    const user = await httpService.post('auth/login', credentials)
    if (user) return _saveLocalUser(user) 
}

async function signup(userInfo) {
    try {
        return await storageService.signup(userInfo);
    } catch (err) {
        throw err;
    }
}

async function logout() {
    return httpService.post('auth/logout/')
}


async function getLoggedInUser(userId) {
    const loggedInUser = await httpService.get(`user/${userId}`);
    return loggedInUser;
}

function query() {
    return httpService.get(`user`)
}

async function resetPassword(email, password) {
    return await storageService.resetPassword(email, password);
}


async function updateUser(user) {
    return storageService.updateUser(user);
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}
