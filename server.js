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

// Connect to mySQL
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
// Main Entrance point.
app.get('/', function(req, res){
  res.render('index.jade');
});

// Api calls..
app.get('/api/matches',function(req, res){
  connection.query('SELECT * FROM matches',function(err,rows){
    if(err) throw err;
    res.json(rows);
  });
});

/**/

// Start App
app.listen(1337);
