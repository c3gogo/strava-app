const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { getUser } = require("./services/fetchService");

getUser().then(user => console.log("user", user));

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.listen(3000, function() {
  console.log("Exemple app listening on port 3000!");
});
