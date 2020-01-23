const axios = require("axios");

const STRAVA_URL = "https://www.strava.com/api/v3";
const ACCESS_TOKEN = "";

let config = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
};

const getUser = async () => {
  try {
    let result = await axios.get(`${STRAVA_URL}/athlete`, config);
    return result.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser
};
