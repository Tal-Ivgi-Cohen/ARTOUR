import { userService } from '../../services/user/user.service.js';

export function loadUser() {
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
            const user = await userService.signUp(userInfo);
            if (user) {
                dispatch({ type: 'SIGNUP', user });
            }
        } catch (err) {
            console.log('User Actions: err in signUp', err);
        }
    };
}