var express = require('express');
var session = require('express-session');
var mysql   = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash   = require('connect-flash');
var LocalStrategy = require('passport-local');
var app     = express();
var port    = process.env.PORT || 1337;


// Passport Configuration
require('./config/passport')(passport); // pass passport for configuration

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'jade');

// Passport Set Up
app.use(session({
	secret: 'vidyapathaisalwaysrunning', // Ideally we would store this elsewhere..
	resave: true,
	saveUninitialized: true
} ));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routing
require('./routes/index.js')(app, passport);

// Start App
app.listen(port);
