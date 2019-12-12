const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// import API
const api = require('./api');
// import dotenv file
require('dotenv').config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';


const sessionSecret = process.env.SESSION_SECRET;
const MONGO_URL = dev? process.env.MONGO_DEV_URL : process.env.MONGO_PROD_URL;
// const ROOT_URL = getRootUrl();

mongoose.connect(MONGO_URL);

let conx = mongoose.connection;
conx.on('error', console.error.bind(console, 'connection error:'));
conx.once('open', function() {
  // we're connected!
  console.log("we are connected to the fieworks db");
});


const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then( () => {
	const server = express();

	// initialize the data parsers: cookie and session
	server.use(express.json());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
	server.use(cookieParser());
	
	// initialize the session store and config object.
	const MongoStore = mongoSessionStore(session);
	const session_config = {
		name: 'fireworks.sid',
		secret: sessionSecret,
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			url: MONGO_URL,
			ttl: 14*24*60*60, //save session for 14 days
		}),
		cookie: {
			httpOnly: true, //TODO: change this to httpsOnly for secrity
			maxAge: 14*24*60*60*1000, //expires in 14 days
		}
	};

	// user the session config object
	server.use(session(session_config));

	// call API function
	api(server);

	server.get( '*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`Server started at ${port}`);
	});
}).catch(ex => {
	console.error(ex.stack);
	process.exit(1);
});
