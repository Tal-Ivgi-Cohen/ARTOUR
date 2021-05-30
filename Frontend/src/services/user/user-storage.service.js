const gData = require('../../data/gallery.json');

export const storageService = {
  getUser,
  getArts,
  getOrders,
  login
};


//READ LIST
function query(entityType, delay = 600) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    console.log('set to storage');
    entities = gData[entityType];
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
  // return Promise.resolve(entities)
}

function getUser(entityType, delay = 600) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || null;
  if (!entities || !entities.length) {
    console.log('set to storage');
    return entities;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
  // return Promise.resolve(entities)
}
//DETAILS FIND ONE BY ID
async function getArts(userId) {
  const arts = await query('arts');
  if (arts) {
    const userArts = arts.filter(art => art.artist._id === userId);
    return userArts;
  }
}

async function getOrders(userId) {
  const orders = await query('orders');
  if (orders) {
    const ordersByUser = orders.filter(order => order.buyer.id === userId);
    const ordersToUser = orders.filter(order => order.items.filter(item => item.artist.id === userId));
    return { byUser: ordersByUser, toUser: ordersToUser };
  }
}

async function login(username, password) {
  const users = await query('users');
  if (users) {
    const user = users.find(user => user.userName === username && user.password === password);
    return user || null;
  }
}