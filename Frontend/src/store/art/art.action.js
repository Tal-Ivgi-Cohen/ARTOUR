import { artService } from '../../services/art/art.service.js';

export function loadArts(filterBy) {
    return async dispatch => {
        try {
            // loadArts
            const arts = await artService.loadArts(filterBy);
        console.log(arts);
            dispatch({ type: 'SET_ARTS', arts });

        } catch (err) {
            console.log('Art Actions: err in loaded Arts', err);
        }
    };
}
//REMOVE/DELETE
export function removeArt(artId) {
    return async dispatch => {
        try {
            await artService.remove(artId);
            dispatch({ type: 'REMOVE_ART', artId });
        } catch (err) {
            console.log('ArtActions: err in removeArt', err);
        }
    };
}
export function saveArt(art) {
    return async dispatch => {
        try {
            const arts = await artService.save(art);
            console.log('arts after update', arts);
            const action = {
                type: 'SET_ARTS',
                arts: arts
            };
            dispatch(action);
        } catch (err) {
            console.log('ArtActions: err in saveArt', err);
        }

    };
}
export function setArt(artId) {
    return async dispatch => {
        try {
            const art = await artService.getById(artId);
            dispatch({ type: 'SET_ART', art });
        } catch (err) {
            console.log('Art Actions: err in selected Art', err);
        }
    };
}
