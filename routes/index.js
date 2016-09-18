module.exports = function(app){

  // Index..
  app.get('/', function(req, resp){

    connection.query('SELECT * FROM matches',function(err,rows){
      if(err) throw err;

      console.log('Data received from Db:\n');
      resp.send('Row Count:' + rows.length);
    });
  });

}
