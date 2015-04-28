require('angular/angular');
var module = angular.module('app', []);
var service = require('../games/services/GameService');
var controller = require('../games/controllers/GameController')
module.service('GameService', service);
module.controller('GameController', controller);