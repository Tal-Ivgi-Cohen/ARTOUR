import { utilService } from "../utilService";
const gData = require('../../data/gallery.json');

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};


//READ LIST
async function query(entityType) {
  let entities = await JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    console.log('set to storage');
    entities = gData[entityType];
    _save(entityType, entities);
  }
  return entities;
}
//DETAILS FIND ONE BY ID
async function get(entityType, entityId) {
  const entities = await query(entityType);
  return entities.find(entity => entity._id === entityId);
}
//ADD
async function post(entityType, newEntity) {
  newEntity._id = utilService.makeId();
  const entities = await query(entityType);
  entities.push(newEntity);
  _save(entityType, entities);
  return entities;
}
//UPDATE
async function put(entityType, updatedEntity) {
  console.log('the art in storage service', updatedEntity);
  const entities = await query(entityType);
  const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
  entities.splice(idx, 1, updatedEntity);
  _save(entityType, entities);
  return entities;
}
//DELETE
async function remove(entityType, entityId) {
  const entities = await query(entityType);
  const idx = entities.findIndex(entity => entity._id === entityId);
  entities.splice(idx, 1);
  _save(entityType, entities);
}
//SAVE TO STORAGE
function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
