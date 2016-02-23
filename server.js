var express = require("express");
var pg = require("pg");
var app = express();


var connectString = "postgres://hostname:yourpassword@localhost:5432/db name";
pg.connect(connectString, function(err, client, done){
  if(err){
    return console.error('error fetching client from pool', err);
  }
  client.query("SELECT $1::int AS number", ["1"], function(err, result){
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
  });
});



app.listen(8000, function(){
  console.log("listen 8000");
});
