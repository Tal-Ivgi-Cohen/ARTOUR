const gData = require('../data/gallery.json');

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};


//READ LIST
function query(entityType, delay = 600) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  if (!entities || !entities.length) {
    entities = gData.artworks;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
  // return Promise.resolve(entities)
}
//DETAILS FIND ONE BY ID
async function get(entityType, entityId) {
  const entities = await query(entityType);
  return entities.find(entity => entity._id === entityId);
}
//ADD
async function post(entityType, newEntity) {
  newEntity._id = _makeId();
  const entities = await query(entityType);
  entities.push(newEntity);
  _save(entityType, entities);
  return newEntity;
}
//UPDATE
async function put(entityType, updatedEntity) {
  const entities = await query(entityType);
  const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
  entities.splice(idx, 1, updatedEntity);
  _save(entityType, entities);
  return updatedEntity;
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
//UTIL-MAKE-ID
function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}


// const gData=[
//     {
//       "_id": "a101",
//       "title": "birds leaves",
//       "price": 120,
//       "imgUrl": "https://cdn.pixabay.com/photo/2021/04/27/13/32/birds-6211541_960_720.png",
//       "material": "Canvas",
//       "technique": "Oil",
//       "category": "Photograph",
//       "style": "abstract",
//       "color": "red",
//       "artist": {
//         "id": "_u101",
//         "fullname": "Tair Bitan",
//         "imgUrl": "/img/img2.jpg"
//       },
//     },
//     {
//         "_id": "a102",
//         "title": "sunrise sky",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2020/08/07/10/22/trees-5470297_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a103",
//         "title": "hybrid dog",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a104",
//         "title": "flowers bloom",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2020/02/22/11/09/anemone-4870275_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a105",
//         "title": "lemon tree",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a106",
//         "title": "flowers petals",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2021/04/12/10/06/flowers-6172079_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a107",
//         "title": "river mountains",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2020/11/17/15/36/river-5752716_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a108",
//         "title": "mountains night",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a109",
//         "title": "milky way",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2019/12/02/12/40/milky-way-4667644_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       },
//       {
//         "_id": "a110",
//         "title": "orchids flowers",
//         "price": 120,
//         "imgUrl": "https://cdn.pixabay.com/photo/2021/05/16/01/04/orchids-6256963_960_720.jpg",
//         "material": "Canvas",
//         "technique": "Oil",
//         "category": "Photograph",
//         "style": "abstract",
//         "color": "red",
//         "artist": {
//           "id": "_u101",
//           "fullname": "Tair Bitan",
//           "imgUrl": "/img/img2.jpg"
//         },
//       }
// ]