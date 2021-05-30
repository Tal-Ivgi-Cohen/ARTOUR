import { storageService } from './art-storage.service.js';

const STORAGE_KEY = 'arts';

export const artService = {
    query,
    getById,
    save,
    remove,

};

function query() {
    return storageService.query(STORAGE_KEY);
}
function getById(artId) {
    console.log(' get art service from', artId);
    return storageService.get('arts', artId);
}
function remove(artId) {
    return storageService.remove('arts', artId);
}
async function save(art) {
    if (art._id) {
        return await storageService.put('arts', art);
    } else {
        return await storageService.post('arts', art);
    }
}