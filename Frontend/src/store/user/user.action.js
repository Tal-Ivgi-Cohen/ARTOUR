import { userService } from '../../services/user/user.service.js';

export function loadUser() {
    return async dispatch => {
        try {
            const user = await userService.getLoggedInUser();
            const arts = await userService.getUserArts();
            const orders = await userService.getUserOrders();
            dispatch({ type: 'SET_USER', user, arts, orders });
            console.log('load user', user);

        } catch (err) {
            console.log('User Actions: err in loaded User', err);
        }
    };
}
//LOGIN
export function login(username, password) {
    return async dispatch => {
        try {
            const user = await userService.login(username, password);
            dispatch({ type: 'LOGIN', user });
        } catch (err) {
            console.log('User Actions: err in login', err);
        }
    };
}
// export function saveArt(art) {
//     return async dispatch => {
//         try {
//             const arts = await artService.save(art);
//             console.log('arts after update', arts);
//             const action = {
//                 type: 'SET_ARTS',
//                 arts: arts
//             };
//             dispatch(action);
//         } catch (err) {
//             console.log('ArtActions: err in saveArt', err);
//         }

//     };
// }
// export function setArt(artId) {
//     return async dispatch => {
//         try {
//             const art = await artService.getById(artId);
//             dispatch({ type: 'SET_ART', art });
//         } catch (err) {
//             console.log('Art Actions: err in selected Art', err);
//         }
//     };
// }
