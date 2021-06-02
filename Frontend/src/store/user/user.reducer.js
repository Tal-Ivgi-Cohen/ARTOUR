const initialState = {
    loggedInUser: null,
    users: []
};

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users };
        case 'SET_USER':
            return { ...state, loggedInUser: action.user };
        case 'LOGIN':
            return { ...state, loggedInUser: action.user };
        case 'LOGOUT':
            return { ...state, loggedInUser: null };
        case 'SIGNUP':
            return { ...state, loggedInUser: action.user };
        case 'UPDATE_USER':
            return { ...state, users: action.users, loggedInUser: action.user };
        default:
            return state;
    }
}
