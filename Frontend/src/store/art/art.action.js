import { artService } from '../../services/art.service.js'

export function loadArts() {
    return async dispatch => {
        try {
            const arts = await artService.query()
            dispatch({ type: 'SET_ARTS', arts })
            console.log('load arts', arts)

        } catch (err) {
            console.log('Art Actions: err in loaded Arts', err)
        }
    }
}
export function removeArt(artId) {
    return async dispatch => {
        try {
            await artService.remove(artId)
            dispatch({ type: 'REMOVE_ART', artId })
        } catch (err) {
            console.log('ArtActions: err in removeArt', err)
        }
    }
}
export function saveArt(art) {
    return async dispatch => {
        try {
            const savedArt = await artService.save(art)
            const action = {
                type: art._id ? 'UPDATE_ART' : 'ADD_ART',
                art: savedArt
            }
            dispatch(action)
        } catch (err) {
            console.log('ArtActions: err in saveArt', err)
        }

    }
}
export function selectedArt(artId) {
        return async dispatch => {
            try {
                const art = await artService.getById(artId)
                dispatch({ type: 'SELECTED_ART', art })
            } catch (err) {
                console.log('Art Actions: err in selected Art', err)
            }
        }
}
