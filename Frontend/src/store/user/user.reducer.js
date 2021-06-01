const initialState = {
    user: null,
};

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'LOGIN':
            return { ...state, user: action.user };
        case 'LOGOUT':
            return { ...state, user: null };
        case 'SIGNUP':
            return { ...state, user: action.user };
        default:
            return state;
    }
}
