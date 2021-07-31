const express = require('express')
const { requireArtist } = require('../../middlewares/requireAuth.middleware')
const { getArts, getArt, deleteArt, updateArt, addArt } = require('./art.controller')
const router = express.Router()


router.get('/', getArts)
router.get('/:id', getArt)
router.put('/:id', updateArt)
router.post('/', requireArtist, addArt)
router.delete('/:id',requireArtist, deleteArt)


module.exports = router
