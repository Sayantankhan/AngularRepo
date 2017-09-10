var app = angular.module("routeapp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/",{
      templateUrl: "home1.html"
    })
    .when("/home", {
        templateUrl: "home1.html"
    })
    .when("/about_page", {
        templateUrl : "about.html"
    })
    .when("/red", {
        templateUrl : "home1.html"
    });

  $locationProvider.html5Mode(true).hashPrefix('!');

});
