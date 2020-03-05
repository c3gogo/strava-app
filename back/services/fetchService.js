const axios = require("axios");

const STRAVA_URL = "https://www.strava.com/api/v3";
const ACCESS_TOKEN = "";
const CLIENT_ID= ""
const CLIENT_SECRET=""
const AUTHORIZATION_CODE = "" 

const Athlete = require("./../models/Athlete");
const Activity = require("./../models/Activity");


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
    };
    Athlete.findOneAndUpdate(
      { username: newData.username },
      newData,
      { upsert: true },
      function(err, doc) {
        if (err) throw err;
        console.log("Succesfully saved.");
      }
    );
  } catch (error) {
    throw error;
  }
};

const getAndSaveActivities = async () => {
  try {
    let result = await axios.get(`${STRAVA_URL}/activities`, config);

    await Activity.remove({athleteId: "5e601a7f617205fd57a39acc"})
    console.log(result)
    result.data.forEach(activity => {
      let newData = new Activity({
        name: activity.name,
        distance: activity.distance,
        averageSpeed: activity.average_speed,
        date: activity.start_date,
        athleteId: "5e601a7f617205fd57a39acc"
      });
      newData.save(
        function(err, doc) {
          if (err) throw err;
          console.log("Succesfully saved.");
        }
      );

    })
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAndSaveUser,
  getAndSaveActivities
};
