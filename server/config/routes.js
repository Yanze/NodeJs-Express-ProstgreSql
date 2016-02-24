var users = require("./../controllers/users.js");

module.exports = function(app){
  app.post("/add-new", users.add);
  app.get("/get-all", users.getAll);

};
