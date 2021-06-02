import { userService } from '../../services/user/user.service.js';

export function loadUsers() {
    console.log('loaduserrrrrrr');
    return async dispatch => {
        try {
            const users = await userService.query();
            console.log('users action2',users);
            dispatch({ type: 'SET_USERS', users });
            console.log('load users', users);

        } catch (err) {
            console.log('User Actions: err in loaded users', err);
        }
    };
}
export function loadLoggedInUser() {
    return async dispatch => {
        try {
            const user = await userService.getLoggedInUser();
            if (user) {
                dispatch({ type: 'SET_USER', user });
                console.log('load user', user._id);
            }

        } catch (err) {
            console.log('User Actions: err in loaded User', err);
        }
    };
}
//LOGIN
export function login(credentials) {
    return async dispatch => {
        try {
            const user = await userService.login(credentials);
            if (user) {
                dispatch({ type: 'LOGIN', user });
            }
        } catch (err) {
            console.log('User Actions: err in login', err);
        }
    };
}
//LOGOUT
export function logout() {
    return dispatch => {
        try {
            userService.logout();
            dispatch({ type: 'LOGOUT' });
        } catch (err) {
            console.log('User Actions: err in logout', err);
        }
    };
}

//SIGNUP
export function signup(userInfo) {
    return async dispatch => {
        try {
            const user = await userService.signup(userInfo);
            if (user) {
                dispatch({ type: 'SIGNUP', user });
            }
        } catch (err) {
            console.log('User Actions: err in signUp', err);
        }
    };
}

//UPDATE
export function updateUser(user) {
    return async dispatch => {
        try {
            const users = await userService.updateUser(user);
            if (users) {
                dispatch({ type: 'UPDATE_USER', users, user });
            }
        } catch (err) {
            console.log('User Actions: err in updating a user', err);
        }
    };
}