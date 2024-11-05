const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type: String, required: true},
  mainCharacter: {type: String, required: true},
  productionCompany: {type: String},
  mangaka: {type: String},
  // image: String,
})

const Anime = mongoose.model('Anime', animeSchema)
module.exports = Anime
