const axios = require("axios");
const API_URL = process.env.BASE_API_URL;

const getProductController = async (req, res) => {
  try {
    // check if access token exists in session
    if (!req.session.accessToken) {
      res.status(401).send("Access token not found");
      return;
    }

    // make a request to the events API endpoint with the access token in the Authorization header
    const response = await axios.get(`${API_URL}/api/catalog/products`, {
      headers: {
        Authorization: `Bearer ${req.session.accessToken}`,
        "x-context-request": `{"tenantId":"${process.env.TENANT_ID}","applicationId":"${process.env.APPLICATION_ID}"}`,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
};

module.exports = getProductController;
