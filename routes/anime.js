const express = require('express')
const route = express.Router()
const animeController = require('../controllers/anime')

route.get('/anime/new', animeController.new)
route.post('/anime', animeController.create)
route.get('/anime', animeController.index)
route.get('/anime/:id', animeController.show)
route.delete('/anime/:id', animeController.delete)
route.get('/anime/:id/edit', animeController.edit)
route.put('/anime/:id', animeController.update)
module.exports = route