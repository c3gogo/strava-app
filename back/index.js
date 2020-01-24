const express = require("express");
const graphqlHTTP = require('express-graphql')
const mongoose = require("mongoose");
const schema = require('./schema/schema')
const app = express();

const { getAndSaveUser } = require("./services/fetchService");

mongoose.connect('mongodb://db:27017/strava-app',{ useNewUrlParser: true })

getAndSaveUser()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, function() {
  console.log("Exemple app listening on port 3000!");
});
