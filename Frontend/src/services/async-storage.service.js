export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}
const gData=[
    {
      "_id": "a101",
      "title": "The Sky",
      "price": 120,
      "imgUrl": "/img/img1.jpg",
      "material": "Canvas",
      "technique": "Oil",
      "category": "Photograph",
      "style": "abstract",
      "color": "red",
      "artist": {
        "id": "_u101",
        "fullname": "Tair Bitan",
        "imgUrl": "/img/img2.jpg"
      },
    }
]

//READ LIST
function query(entityType, delay = 600) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (!entities || !entities.length){
        entities = gData
    }
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject('OOOOPs')
            resolve(entities)
        }, delay)   
    })
    // return Promise.resolve(entities)
}
//DETAILS FIND ONE BY ID
function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
//ADD
function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}
//UPDATE
function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}
//DELETE
function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}
//SAVE TO STORAGE
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}
//UTIL-MAKE-ID
function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}