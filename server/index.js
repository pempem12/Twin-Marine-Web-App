import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"

import config from "./config/config.js"
import { initRoutes } from "./routes/routes.js"

// DB Initialization
const db = (() => {
	mongoose
		.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true})
		.catch((error) => console.error(error));

  	mongoose.set("useCreateIndex", true);
	mongoose.set("useFindAndModify", false);

  	return mongoose.connection;
})();

// Express initialization 
const app = (() => {
	const _app = express();
	// Morgan logging middleware
	_app.use(morgan("dev"));

	// JSON middleware
	_app.use(bodyParser.urlencoded({
		extended: true
	}));
	_app.use(bodyParser.json());

	return _app;
})();

// Init our routes with express
initRoutes(app);

app.listen(config.server.port, () => console.log(`App now listening on port ${config.server.port}`));




