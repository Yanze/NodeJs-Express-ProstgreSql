var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "static/partials/add.html"
  });
});
