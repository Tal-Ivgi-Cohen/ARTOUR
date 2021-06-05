import { storageService } from './art-storage.service.js';

const STORAGE_KEY = 'arts';

export const artService = {
    // query,
    getById,
    save,
    remove,
    loadArts

};

async function loadArts() {
    return await storageService.loadArts(STORAGE_KEY);
}
async function getById(artId) {
    return await storageService.get('arts', artId);
}
async function remove(artId) {
    return await storageService.remove('arts', artId);
}
async function save(art) {
    if (art._id) {
        return await storageService.put('arts', art);
    } else {
        return await storageService.post('arts', art);
    }
}