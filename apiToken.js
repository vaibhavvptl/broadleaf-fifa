const axios = require("axios");
const express = require("express");
const app = express();
const getAuthToken = async (req, res, next) => {
  try {
    // check if access token exists in session or app object
    const accessToken = req.session.accessToken || app.get("accessToken");
    // if access token exists, skip fetching and move to next middleware
    if (accessToken) {
      return next();
    }

    // fetch access token from API
    const { data } = await axios.post(
      `https://hospitality.admin.legends.blcdemo.com/auth/oauth/token?grant_type=client_credentials`,
      {},
      {
        auth: {
          username: "th-client",
          password: "klj2390!@90as!ASD",
        },
      }
    );

    // store access token in session or app object
    req.session.accessToken = data.access_token;

    app.set("accessToken", data.access_token);

    console.log("Access token fetched and stored successfully");
    next();
  } catch (error) {
    console.error("Error fetching access token:", error);
    next(error);
  }
};

module.exports = getAuthToken;
