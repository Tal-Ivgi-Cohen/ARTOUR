import { storageService } from './async-storage.service.js'

export const toyService = {
    getById, 
}

function getById(artId) {
    console.log(' get art service fromt',artId);
    return storageService.get('art', artId)
}
