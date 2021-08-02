import { utilService } from "../utilService";
const gData = require('../../data/gallery.json');

export const storageService = {
  getUser,
  login,
  logout,
  signup,
  updateUser,
  query,
  resetPassword
};


async function query(entityType) {
  let entities = await JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    entities = gData[entityType];
    _save(entityType, entities);
  }
  return entities;
}

async function getUser(entityType) {
  return await JSON.parse(sessionStorage.getItem(entityType) || 'null');
}

async function login(credentials) {
  const users = await query('users');
  const { email, password } = credentials;
  if (users) {
    const user = users.find(user => user.email === email && user.password === password);
    _saveLocalUser(user);
    _save('shoppingCart', []);
    return user || null;
  }
}

function logout(key) {
  sessionStorage.clear(key);
  localStorage.removeItem('shoppingCart');
  localStorage.removeItem('wishlist');
}

async function signup(newUser) {
  newUser._id = utilService.makeId();
  const users = await query("users");
  users.push(newUser);
  _save("users", users);
  _saveLocalUser(newUser);
  return { users, user: newUser };
}

async function updateUser(updatedUser) {
  const users = await query('users');
  const idx = users.findIndex(user => updatedUser._id === user._id);
  users.splice(idx, 1, updatedUser);
  _save('users', users);
  _saveLocalUser(updatedUser);
  return users;
}

async function resetPassword(email, password) {
  const users = await query('users');
  const idx = users.findIndex(user => user.email === email);
  users[idx].password = password;
  _save('users', users);
  return users;
}

function _saveLocalUser(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
  return user;
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
