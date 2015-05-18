require('angular/angular');
require('angular-route');
var module = angular.module('app', ['ngRoute']);
var service = require('../games/services/GameService');
var gamecontroller = require('../games/controllers/GameController')
var detailscontroller = require('../games/controllers/DetailsController')

module.service('GameService', service);

module.controller('BeheerController', gamecontroller);
module.controller("DetailsController", detailscontroller);


module.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/beheer', {
   	  templateUrl: "../beheer.html",
      controller: "BeheerController",
      controllerAs: "beheer"
  }).
  when('/authcallback', {
       templateUrl: "../callbackurl.html",
      controller: "CallbackController",
      controllerAs: "callback"
  }).
   when('/details/:id', {
       templateUrl: "../details.html",
      controller: "DetailsController",
      controllerAs: "details"
  })
}]);

module.controller('CallbackController', function($routeParams) {
  var self = this;
  self.message = $routeParams;
});


