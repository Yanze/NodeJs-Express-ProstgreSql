var user = require("../models/User.js");

module.exports = (function(){
  return {

    add: function(req, res){
      var newUser = new user.User(req.body.name, req.body.age);
      newUser.add(function(err){
        if(err){
          res.json({
            status: "KO",
            message: "sth went wrong"
          });
        }
        else {
          res.json({
              status: "OK",
              message: "added"
            });
        }
      });
    },


    getAll: function(req, res){
      var newUser = new user.User();
      newUser.getAll(function(users, err){
        if(err){
          console.log(err);
          res.json({
            status: "KO",
            message: "sth went wrong"
          });
        }
        else{
          res.json(users);
        }

      });

    }



  };
})();
