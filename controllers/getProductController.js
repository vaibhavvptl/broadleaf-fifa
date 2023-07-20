const getProductController = async (req, res) => {
  try {
    // check if access token exists in session
    if (!req.session.accessToken) {
      res.status(401).send("Access token not found");
      return;
    }

    // make a request to the events API endpoint with the access token in the Authorization header
    const response = await fetch(
      "https://hospitality.admin.legends.blcdemo.com/api/catalog/products",
      {
        headers: {
          Authorization: `Bearer ${req.session.accessToken}`,
          "x-context-request":
            '{"tenantId":"Hospitality","applicationId":"01GPYEXET5B7Y61HW8TB4R0YWH","customerContextId":"01GPYEXET5B7Y61HW8TB4R0YWH","changeContainer":{}}',
        },
      }
    );
    const data = await response.json();
    const names = data.content.map((obj) => obj.name);
    res.json(names);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
};

module.exports = getProductController;
