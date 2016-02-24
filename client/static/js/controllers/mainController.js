var app = angular.module("app");

app.controller('mainController', function($scope, mainFactory){
  $scope.add = function(){
    mainFactory.add($scope.user, function(response){

    });
  };

  mainFactory.getAll(function(data){
    $scope.users = data;
  });


});
