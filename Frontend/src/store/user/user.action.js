import { userService } from '../../services/user/user.service.js';

export function loadUsers() {
    return async dispatch => {
        try {
            const users = await userService.query();
            dispatch({ type: 'SET_USERS', users });
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
            }
        } catch (err) {
           console.log('User Actions: err in loaded User', err);
        }
    };
}

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

export function signup(userInfo) {
    return async dispatch => {
        try {
            const data = await userService.signup(userInfo);
            const { user, users } = data;
            if (data) {
                dispatch({ type: 'SIGNUP', user, users });
            }
        } catch (err) {
           console.log('User Actions: err in signUp', err);
        }
    };
}

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

export function resetPassword(email, password) {
    return async dispatch => {
        try {
            const users = await userService.resetPassword(email, password);
            if (users) {
                dispatch({ type: 'RESET_PASSWORD', users });
            }
        } catch (err) {
          console.log('User Actions: err in resetting user password', err);
        }
    };
}

