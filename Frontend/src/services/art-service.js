import { storageService } from './storage.service.js'

export const artService = {
    query,
    getById,
    createArt,
    removeArt,
    updateArt
  }
  const STORAGE_KEY = 'arts'

  _loadArts()


 /* function query() {
    return storageService.query(STORAGE_KEY)
      .then(toys => {return toys})
  }
  
  function getById(toyId) {
    return query().then(toys => toys.find(toy => toy._id === toyId))
  }
  
  function createToy({ name, price, type }) {
    const toy = {
      name,
      price,
      type,
      createdAt: Date.now(),
      inStock: (Math.random() > 0.5) ? true : false
    }
    return storageService.post(STORAGE_KEY, toy)
  }
  
  function removeToy(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
  }
  
  function updateToy(toy) {
    return storageService.put(STORAGE_KEY, toy)
  }
  
  function _loadToys() {
    return storageService.query(STORAGE_KEY)
      .then(toys => {
        if (!toys || toys.length === 0) {
          toys = [
            {
              _id: "4d6r5",
              name: "rubber ducky",
              price: 18,
              type: "funny",
              createdAt: Date.now() - Math.floor((Math.random() * 100 * 1000 * 60 * 60 * 24)),
              inStock: false
            },
            {
              _id: "4d6u5",
              name: "janga",
              price: 25,
              type: "puzzle",
              createdAt: Date.now() - Math.floor((Math.random() * 100 * 1000 * 60 * 60 * 24)),
              inStock: true
            },
            {
              _id: "4m6r5",
              name: "far bunny",
              price: 50,
              type: "funny",
              createdAt: Date.now() - Math.floor((Math.random() * 100 * 1000 * 60 * 60 * 24)),
              inStock: false
            },
            {
              _id: "4d6r1",
              name: "rubik's cube",
              price: 101,
              type: "puzzle",
              createdAt: Date.now() - Math.floor((Math.random() * 100 * 1000 * 60 * 60 * 24)),
              inStock: true
            },
            {
              _id: "4d695",
              name: "mortal kombat",
              price: 6,
              type: "video-game",
              createdAt: Date.now() - Math.floor((Math.random() * 100 * 1000 * 60 * 60 * 24)),
              inStock: true
            }
          ]
          storageService.save(STORAGE_KEY, toys)
        }
        return toys
      })
  }*/
  