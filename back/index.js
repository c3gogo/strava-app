const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const app = express();
const cors = require('cors')

const { getAndSaveUser, getAndSaveActivities } = require("./services/fetchService");

mongoose.connect("mongodb://localhost:27017/strava-app", { useNewUrlParser: true });

//getAndSaveUser();
//getAndSaveActivities(),

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3030, function() {
  console.log("Exemple app listening on port 3000!");
});
