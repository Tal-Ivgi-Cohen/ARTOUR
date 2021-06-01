import { utilService } from "../utilService";
const gData = require('../../data/gallery.json');

export const storageService = {
  getUser,
  login,
  logout,
  signup
};


//READ LIST
async function query(entityType) {
  let entities = await JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    console.log('set to storage');
    entities = gData[entityType];
    if (entityType !== "users") _save(entityType, entities);
  }
  return entities;
}

async function getUser(entityType) {
  return await JSON.parse(sessionStorage.getItem(entityType) || 'null');
}

async function login(credentials) {
  const users = await query('users');
  const { username, password } = credentials;
  if (users) {
    const user = users.find(user => user.userName === username && user.password === password);
    _saveLocalUser(user);
    return user || null;
  }
}

function logout(key) {
  sessionStorage.clear(key);
}

function signup(newUser) {
  newUser._id = utilService.makeId();;
  gData.users.push(newUser);
  _saveLocalUser(newUser);
  return newUser;
}


//SAVE USER TO STORAGE
function _saveLocalUser(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
}

//SAVE ENTITIES TO STORAGE
function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}