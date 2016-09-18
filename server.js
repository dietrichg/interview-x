var express = require('express');
var mysql   = require('mysql');
var session = require('express-session');

var app     = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

// DB
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'interview_x'
});

// connect to mySQL
connection.connect(function(error){
  if( !!error ){
    console.log('Error while connecting.');
    process.exit(1);
  }
  else{
    console.log('Successfully connected to MySQL db.');
  }
});

// Routing
require('./routes')(app);

// Start App
app.listen(1337);
