const axios = require("axios");
const API_URL = process.env.BASE_API_URL;

const getEventController = async (req, res) => {
  try {
    // check if access token exists in session
    if (!req.session.accessToken) {
      res.status(401).send("Access token not found");
      return;
    }

    // make a request to the events API endpoint with the access token in the Authorization header
    const response = await axios.get(`${API_URL}/api/catalog/events`, {
      headers: {
        Authorization: `Bearer ${req.session.accessToken}`,
        "x-context-request": `{"tenantId":"${process.env.TENANT_ID}","applicationId":"${process.env.APPLICATION_ID}"}`,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      res.status(404).send();
    } 
     else if (err.response && err.response.status === 403) {
     
      res.status(403).send();
     
    } 
    else if (err.response && err.response.status===401){
      res.status(401).send()
    }
    
    else {
      // For all other errors
      console.error(err);
      res.status(500).send("Error");
    }
  }
};

module.exports = getEventController;
