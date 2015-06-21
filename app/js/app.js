require('angular/angular');
require('angular-route');
require('angular-ui-router/build/angular-ui-router');


 
var module = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.router']);
var gameservice = require('../games/services/GameService');
var detailsservice = require('../games/services/DetailsService');
var gamemodalservice = require('../games/services/GameModalService');
var socket = require('../js/socket');


var rangefilter = require('../games/filters/RangeFilter');
var property = require('../games/filters/DeepProperty');
var gamehost = require('../games/filters/GameHost');
var playedgames = require('../games/filters/PlayedGames');
var notmatchedfilter = require('../games/filters/NotMatched');
var matchedfilter = require('../games/filters/MatchedBy');

var tileDirective = require('../games/directives/tileDirective');

var logincontroller = require('../games/controllers/LoginController');
var gamecontroller = require('../games/controllers/GameController');
var gamemodalcontroller = require('../games/controllers/GameModalController');
var detailscontroller = require('../games/controllers/DetailsController');
var callbackcontroller = require('../games/controllers/CallbackController');
var Injector    = require('../games/services/TokenInjector');
 
module.service('socket', socket);
module.service('GameService', gameservice);
module.service('DetailsService', detailsservice);
module.service('GameModalService', gamemodalservice);

module.factory('Injector', Injector);

module.filter('range', rangefilter);
module.filter('property', property)
module.filter('played', playedgames);
module.filter('host', gamehost);
module.filter('notmatched', notmatchedfilter);
module.filter('matched', matchedfilter);

module.directive('tile', tileDirective);

module.controller('BeheerController', gamecontroller);
module.controller("DetailsController", detailscontroller);
module.controller('CallbackController', ['$location', callbackcontroller]);
module.controller('LoginController', logincontroller)
module.controller("GameModalController", gamemodalcontroller);

module.config(['$routeProvider', require('../routing/Config')]);

module.config(['$httpProvider', function ($httpProvider)
{
  $httpProvider.interceptors.push('Injector');
}]);

