require('angular/angular');
require('angular-route');
var module = angular.module('app', ['ngRoute']);
var gameservice = require('../games/services/GameService');
var detailsservice = require('../games/services/DetailsService');

var gamecontroller = require('../games/controllers/GameController');
var detailscontroller = require('../games/controllers/DetailsController');
var callbackcontroller = require('../games/controllers/CallbackController');
var Injector    = require('../games/services/TokenInjector');

module.service('GameService', gameservice);
module.service('DetailsService', detailsservice);

module.factory('Injector', Injector);


module.controller('BeheerController', gamecontroller);
module.controller("DetailsController", detailscontroller);
module.controller('CallbackController', ['$location', callbackcontroller]);


// module.config(['$locationProvider', function ($locationProvider)
// {
//   $locationProvider.html5Mode(true);
// }]);

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


module.config(['$httpProvider', function ($httpProvider)
{
  $httpProvider.interceptors.push('Injector');
}]);



