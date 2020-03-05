const mongoose = require('mongoose')
var Schema = mongoose.Schema

const ActivitySchema = new Schema ({
  name: String,
  distance: Number,
  averageSpeed: Number,
  date: String,
  athleteId: String
})

module.exports = mongoose.model('Activity', ActivitySchema)