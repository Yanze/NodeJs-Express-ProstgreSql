var pg = require("pg");
var dbconfig = require('../config/database');

// do the queries in model
module.exports = (function(){

  function User(name, age){
     this.name = name;
     this.age = age;
  }

  User.prototype.getAll = function(callback){
    var current_user = this;
    pg.connect(dbconfig.connectString, function(err, client, done){
      if(err){
        return console.error('error fetching client from pool', err);
      }
      var sql = "SELECT * FROM persons";
      client.query(sql, function(err, result){
          callback(result.rows, err);
      });

    });
  };

  User.prototype.add = function(callback){
    var current_user = this;

      pg.connect(dbconfig.connectString, function(err, client, done){

        if(err){
          callback(err);
        }
        var sql = "INSERT INTO persons(name,age) VALUES ($1, $2)";
        client.query(sql, [current_user.name, current_user.age], function(err, result){
          done();
          callback(err);
        });
      });
  };


  return {
    User : User
  };
})();
