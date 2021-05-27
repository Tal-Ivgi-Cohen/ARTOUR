import { artService } from '../../services/art.service.js'


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