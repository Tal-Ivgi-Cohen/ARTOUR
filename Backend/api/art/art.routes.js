const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {log} = require('../../middlewares/logger.middleware')
// const {addToy, getToys, deleteToy ,getToy} = require('./toy.controller')
const { getArts , getArt} = require('./art.controller')

const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)


router.get('/', getArts)
router.get('/:id', getArt)
// router.post('/',  requireAuth, addToy)
// router.post('/', addToy)

// router.delete('/:id',deleteToy)
// router.delete('/:id',  requireAuth, deleteToy)


module.exports = router