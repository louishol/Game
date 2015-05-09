require('angular/angular');
require('angular-route');
var module = angular.module('app', ['ngRoute']);
 var service = require('../games/services/GameService');
 var controller = require('../games/controllers/GameController')
 module.service('GameService', service);
 module.controller('BeheerController', controller);

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
  })
}]);



module.controller('CallbackController', function($routeParams) {
  var self = this;
  self.message = $routeParams;
});


