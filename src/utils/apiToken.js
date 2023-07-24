const axios = require("axios");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const API_URL = process.env.BASE_API_URL;
const getAuthToken = async (req, res, next) => {
	try {
		// check if access token exists in session or app object
		const accessToken = req.session.accessToken;

		// if access token exists, skip fetching and move to next middleware

		if (accessToken) {
			const tokenPayload = jwt.decode(accessToken);

			const isNewTokenRequire = moment
				.unix(tokenPayload.exp)
				.isBefore(moment());
			if (!isNewTokenRequire) return next();
		}

		// fetch access token from API
		const { data } = await axios.post(
			`${API_URL}/auth/oauth/token?grant_type=client_credentials`,
			{},
			{
				auth: {
					username: process.env.AUTH_USERNAME,
					password: process.env.AUTH_PASSWORD,
				},
			}
		);

		// store access token in session or app object
		req.session.accessToken = data.access_token;

		next();
	} catch (error) {
		console.error(err);
		res.status(500).send("Error fetching access token");
	}
};

module.exports = getAuthToken;
