const axios = require("axios");

const STRAVA_URL = "https://www.strava.com/api/v3";
const ACCESS_TOKEN = "8e54143d58f9008bf3bd2c2a3b6c5ebff84e5739";

const Athlete = require('./../models/Athlete')

let config = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
};

const getAndSaveUser = async () => {
  try {
    let result = await axios.get(`${STRAVA_URL}/athlete`, config);
    let newData = {
      username: result.data.username,
      firstname: result.data.firstname,
      lastname: result.data.lastname,
      city: result.data.city,
      sex: result.data.sex
    }
    Athlete.findOneAndUpdate({ username: newData.username }, newData, {upsert: true}, function(err, doc) {
      if (err) throw err;
      console.log('Succesfully saved.');
  });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAndSaveUser
};
