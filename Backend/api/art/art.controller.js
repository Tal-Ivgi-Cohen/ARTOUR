const logger = require('../../service/logger.service')
// const userService = require('../user/user.service')
// const socketService = require('../../services/socket.service')
const artService = require('./art.service')

module.exports = {
    getArts,
    // deleteToy,
    // addToy,
    getArt
}

async function getArt(req, res) {
    try {
         console.log('req.params.id',req.params.id);
        const arts = await artService.query({ _id: req.params.id})
        console.log('art', arts);
        res.send(arts[0])
    } catch (err) {
        // logger.error('Cannot get arts', err)
        console.log('Cannot get arts', err);
        res.status(500).send({ err: 'Failed to get arts' })
    }
}

async function getArts(req, res) {
    const filterBy ={}
    const {_id, artistId}  = req.query
    console.log('getArts', req.query);

        try {
            filterBy['_id'] = _id
            filterBy.artistId = artistId
             
        const arts = await artService.query(filterBy)
        // console.log('arts controler',arts);
        res.send(arts)
    } catch (err) {
        // logger.error('Cannot get arts', err)
        console.log('Cannot get arts', err);
        res.status(500).send({ err: 'Failed to get arts' })
    }
}



// async function deleteToy(req, res) {
//     console.log('req.params.id', req.params.id);
//     try {
//         console.log('toycontroller',req.params.id);

//         await toyService.remove(req.params.id)
//         res.send({ msg: 'Deleted successfully' })
//     } catch (err) {
//         // logger.error('Failed to delete toy', err)
//         res.status(500).send({ err: 'Failed to delete toy' })
//     }
// }

// async function addToy(req, res) {
//     try {
//         var toy = req.body
//         toy.byUserId = req.session.user._id
//         toy = await toyService.add(toy)
        
//         // prepare the updated toy for sending out
//         toy.byUser = await userService.getById(toy.byUserId)
//         toy.aboutUser = await userService.getById(toy.aboutUserId)

//         console.log('CTRL SessionId:', req.sessionID);
//         socketService.broadcast({type: 'toy-added', data: toy})
//         socketService.emitToAll({type: 'user-updated', data: toy.byUser, room: req.session.user._id})
//         res.send(toy)

//     } catch (err) {
//         console.log(err)
//         logger.error('Failed to add toy', err)
//         res.status(500).send({ err: 'Failed to add toy' })
//     }
// }

