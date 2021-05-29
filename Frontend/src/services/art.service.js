import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'arts'

export const artService = {
    query,
    getById, 
    save,
    remove,

}

function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(artId) {
    console.log(' get art service front',artId);
    return storageService.get('art', artId)
}
function remove(artId) {
    console.log(' remove art service front',artId);
    return storageService.remove('art', artId)

}
async function save(art) {
    if (art._id) {
       return await storageService.put(`art/edit/${art._id}`, art)
    } else {
        return await storageService.post(`art`, art)
    }
}