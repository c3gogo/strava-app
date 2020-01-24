const mongoose = require('mongoose')
var Schema = mongoose.Schema

const AthleteSchema = new Schema ({
  username: String,
  firstname: String,
  lastname: String,
  city: String,
  sex: String
})

module.exports = mongoose.model('Athlete', AthleteSchema)