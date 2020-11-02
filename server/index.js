import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import session from "express-session"

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

	// Session middleware
	const sess = {
		  secret: config.tokens.sessionSecret
		, cookie: {}
		, resave: false // Force save of session for each request.
        , saveUninitialized: false // Save a session that is new, but has not been modified
	}
	  
	// For configuring HTTPS later
	if (_app.get('env') === 'production') {
		// app.set('trust proxy', 1) // trust first proxy (only use if node.js is behind proxy)
		sess.cookie.secure = true // serve secure cookies
	}
	  
	_app.use(session(sess)) // Use session middleware

	return _app;
})();

// Init our routes with express
initRoutes(app);

app.listen(config.server.port, () => console.log(`App now listening on port ${config.server.port}`));




