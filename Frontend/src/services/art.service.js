import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'arts'

export const artService = {
    query,
    getById, 
}

function query() {
    return storageService.query(STORAGE_KEY)
  }

function getById(artId) {
    console.log(' get art service fromt',artId);
    return storageService.get('art', artId)
}
