const express = require("express");
const session = require("express-session");
require("dotenv").config();

const fifaRouters = require("./routes/v1/fifaRouter");
const getAuthToken = require("./apiToken");

const app = express();

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(getAuthToken);
app.use("/v1", [fifaRouters]);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
