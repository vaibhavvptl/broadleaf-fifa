const express = require("express");
const session = require("express-session");
require("dotenv").config();
const fs = require('fs');
const fifaRouters = require("./routes/v1/fifaRouter");
const getAuthToken = require("./apiToken");

const swaggerUI = require('swagger-ui-express');
const swagger = require('./swagger/index');
const app = express();
const errorHandler=require('./errorHandler')
const swaggerCss = fs.readFileSync(
  `${process.cwd()}/swagger.css`,
  'utf8'
);

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swagger, { customCss: swaggerCss })
);

app.use(getAuthToken);
app.use("/v1", [fifaRouters]);
app.use(errorHandler)
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
