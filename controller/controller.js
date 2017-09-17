"use strict";

var app = angular.module('control', []);

app.controller('HelloWorldController',function($scope){
  $scope.message = "HelloWorld!!!";
});

app.controller('PrintMessage',function($scope, $location){
    $scope.myUrl = $location.absUrl();
    $scope.message = "- Signup";
    $scope.animal = "Animal";
});

app.controller('TimeClock',function($scope,$interval){

  $scope.clock = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.clock = new Date().toLocaleTimeString();
  }, 1000);

});
