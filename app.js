"use strict";

var app = angular.module('routeapp', ['ngRoute','control']);
app.config(function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/",{
      templateUrl: "home1.html"
    })
    .when("/home", {
        templateUrl: "home1.html"
    })
    .when("/about_page", {
        templateUrl : "about.html",
        controller: "HelloWorldController"
    })
    .when("/red", {
        templateUrl : "home1.html"
    });

  $locationProvider.html5Mode(true).hashPrefix('!');

});
