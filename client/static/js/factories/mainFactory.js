var app = angular.module("app");

app.factory('mainFactory', function($http){
  var factory = {};

  factory.add = function(user, callback){
    $http.post("/add-new", user).success(function(response){
        callback(response);
    });
  };

  factory.getAll = function(callback){
    $http.get("/get-all").success(function(response){
      callback(response);
    });
  };


  return factory;
});
