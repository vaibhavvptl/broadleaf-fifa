const axios = require("axios");
const API_URL = process.env.BASE_API_URL;
const { NotFoundError,InternalServerError,UnauthorizedRequestError,ForbiddenRequestError }=require('../customErrors')
const errorMessage=require('../errorMessage')

const getEventController = async (req, res,next) => {
  try {
    // check if access token exists in session
    if (!req.session.accessToken) {
      res.status(401).send("Access token not found");
      return;
    }

    // make a request to the events API endpoint with the access token in the Authorization header
    const response = await axios.get(`${API_URL}/api/catalog/events`, {
      headers: {
        // Authorization: `Bearer ${req.session.accessToken}`,
        "x-context-request": `{"tenantId":"${process.env.TENANT_ID}","applicationId":"${process.env.APPLICATION_ID}"}`,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      next(new NotFoundError(errorMessage.error404))
    } else if (err.response && err.response.status === 401) {
      next(new UnauthorizedRequestError(errorMessage.statusCode401))
    } else if (err.response && err.response.status === 403) {
      next(new ForbiddenRequestError(errorMessage.statusCode401))
    } else {
      // For all other errors
      next( new InternalServerError(errorMessage.error500));
    }
  }
};

module.exports = getEventController;
