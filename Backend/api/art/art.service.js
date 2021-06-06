const dbService = require('../../service/db.service.js')
const ObjectId = require('mongodb').ObjectId
// const regexp = require('regexp')
// const asyncLocalStorage = require('../../services/als.service')
//JSON
// const artsData = require('../../data/art.json')

async function query(filterBy) {
    let criteria = {}
    if (filterBy._id) {
        console.log('filterBy serverr', filterBy);
        criteria = _buildCriteria(filterBy)
    }
    try {

        console.log('filterBy service bk', criteria);
        // const criteria = filterBy
        const collection = await dbService.getCollection('art')
        console.log('criteria service before filter', criteria);
        const arts = await collection.find(criteria).toArray()
        console.log('arts', arts);
        return arts
    } catch (err) {
        // logger.error('cannot find toys', err)
        console.log('cannot find arts', err);
        throw err
    }
    // return artsData.arts
}


async function remove(artId) {
    console.log('artId', artId);
    try {
        const collection = await dbService.getCollection('art')
        // const store = asyncLocalStorage.getStore()
        // const { userId, isAdmin } = store
        // const collection = await dbService.getCollection('toy')
        // remove only if user is owner/admin
        // const criteria = { _id: ObjectId(artId) }
        const criteria = { _id: artId}

        // if (!isAdmin) query.byUserId = ObjectId(artId)
        await collection.deleteOne(criteria)
        console.log(`remove art ${toyId}`)
        // return await collection.deleteOne({ _id: ObjectId(artId), byUserId: ObjectId(userId) })
    } catch (err) {
        console.log(`cannot remove art ${toyId}`, err)
        throw err
    }
}


// async function add(toy) {
//     try {

//         // peek only updatable fields!
//         const toyToAdd = {
//             byUserId: ObjectId(toy.byUserId),
//             aboutUserId: ObjectId(toy.aboutUserId),
//             txt: toy.txt
//         }
//         const collection = await dbService.getCollection('toy')
//         await collection.insertOne(toyToAdd)
//         return toyToAdd;
//     } catch (err) {
//         logger.error('cannot insert toy', err)
//         throw err
//     }
// }

function _buildCriteria(filterBy) {

    const criteria = {}
    const _id = (filterBy._id) ? filterBy._id : ''
    const artistId = (filterBy.artistId) ? filterBy.artistId : ''

    criteria.$or = [{
            _id: _id
        },
        {
            "artist._id": artistId
        }
    ]

    return criteria
}

module.exports = {
    query,
    remove,
    // add
}