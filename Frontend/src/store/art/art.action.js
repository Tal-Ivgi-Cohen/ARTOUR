import { artService } from '../../services/art.service.js'

export function loadArts() {
    return async dispatch => {
        try{
            const arts=await artService.query()
            dispatch({ type: 'SET_ARTS', arts })
            console.log('load arts', arts)

        }catch (err) {
            console.log('Art Actions: err in loaded Arts', err)
            }
    }
}

export function selectedArt(artId) { 
    return  async dispatch => {
       try{
        await artService.getById(artId)
        dispatch({ type: 'SELECTED_ART', artId })
        } catch (err) {
       console.log('Art Actions: err in selected Art', err)
       }
    }
}