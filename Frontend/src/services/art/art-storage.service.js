import { utilService } from "../utilService";
const gData = require('../../data/gallery.json');

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  loadArtsWithArtists
};


async function loadArtsWithArtists(arts) {
  const users = await query('users');
  const artsWithArtists = arts.map(art => {
    const artist = users.find(user => user._id === art.artist._id);
    art.artist = artist;
    return art;
  });
  return artsWithArtists;
}

async function query(entityType,filterBy) {
  let entities = await JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    entities = gData[entityType];
   // console.log('entities',entities);
    _save(entityType, entities);
  }
  if (filterBy){
  entities = entities.filter(art => (art.artist._id === filterBy.artistId));
  }
  return entities;
}

async function get(entityType, entityId) {
  const entities = await query(entityType);
  return entities.find(entity => entity._id === entityId);
}

async function post(entityType, newEntity) {
  newEntity._id = utilService.makeId();
  const entities = await query(entityType);
  entities.push(newEntity);
  _save(entityType, entities);
  return entities;
}

async function put(entityType, updatedEntity) {
  const entities = await query(entityType);
  const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
  entities.splice(idx, 1, updatedEntity);
  _save(entityType, entities);
  return entities;
}

async function remove(entityType, entityId) {
  const entities = await query(entityType);
  const idx = entities.findIndex(entity => entity._id === entityId);
  entities.splice(idx, 1);
  _save(entityType, entities);
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
