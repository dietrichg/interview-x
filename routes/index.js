// This file takes care of all of the applications routing.
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.jade', {
			user : req.user // get the user out of session and pass to template
		});
	});

	app.post('/',function(req,res){
		var sql = "INSERT INTO matches (team,score,match_date) VALUES ?";
		var values = [[req.body.team,req.body.score,req.body.match_date]];
		connection.query(sql,[values],function(err){
			if(err) throw err;
		});
		res.redirect('/');
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	app.get('/login', function(req, res) {
		res.render('login.jade', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
			badRequestMessage : 'Missing username or password.',
      failureFlash : true // allow flash messages
		}),
	    function(req, res) {
        // If we want to add remember me functionality, this snippet is helpful.
        if (req.body.remember) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
        }
	    res.redirect('/');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.jade', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// =====================================
	// API ENDPOINTS (public) ==============
	// =====================================
	app.get('/api/matches',function(req, res){
	  connection.query('SELECT * FROM matches',function(err,rows){
	    if(err) throw err;
	    res.json(rows);
	  });
	});
};



// route middleware to make sure user is logged in.
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
