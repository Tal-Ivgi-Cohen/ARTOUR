const initialState = {
    user: null,
    userArts: null,
    userOrders: null
};

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user, userArts: action.arts, userOrders: action.orders };
        case 'LOGIN':
            return { ...state, user: action.user };
        // case 'LOGOUT':
        //     return { ...state, user: [...state.user.filter(art => action.art._id !== art._id), action.art,] };
        // case 'SIGNUP':
        //     return { ...state, user: state.user.filter(art => art._id !== action.artId) };
        default:
            return state;
    }
}
