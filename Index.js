const express = require("express");
const session = require("express-session");
require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const fifaRouters = require("./src/routes/fifaRouter");
const getAuthToken = require("./src/utils/apiToken");

const swaggerUI = require("swagger-ui-express");
const swagger = require("./src/swagger/index");
const app = express();
const swaggerCss = fs.readFileSync(
	`${process.cwd()}/src/utils/swagger.css`,
	"utf8"
);

app.use(cors({ credential: true }));

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: process.env.SECRET,
		cookie: {
			maxAge: process.env.EXPRESS_SESSION_EXPIRY_TIME * 1000,
			secure: false,
			httpOnly: true,
			sameSite: "strict",
		},
	})
);

app.use(
	"/api-docs",
	swaggerUI.serve,
	swaggerUI.setup(swagger, { customCss: swaggerCss })
);

app.use(getAuthToken);
app.use("/", [fifaRouters]);
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
