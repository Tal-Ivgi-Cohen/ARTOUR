import { httpService } from '../http.service.js';

export const artService = {
    // query,
    getById,
    save,
    remove,
    loadArts

};

async function loadArts(filterBy) {
    const arts = await httpService.get('art', filterBy);
    return arts
}

async function getById(artId) {
    const art = await httpService.get(`art/${artId}`);
    return art;
}

async function remove(artId) {
    return httpService.delete(`art/${artId}`)
}

async function save(art) {
    if (art._id) {
        return await httpService.put(`art/${art._id}`, art)
    } else {
        return httpService.post('art', art)

    }
}
