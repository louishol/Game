var Game = function($scope, GameService)
{

    $scope.username = window.localStorage.getItem("username");
	$scope.games = GameService.list();

    $scope.saveGame = function () {
        GameService.save($scope.newgame);
        $scope.newgame = {};
    }

    $scope.delete = function (id) {

        GameService.delete(id);
        if ($scope.newgame.id == id) $scope.newgame = {};
    }

    $scope.start = function(id) {
        GameService.start(id);
    }
    $scope.join = function(id) {
        GameService.join(id);
    }

    $scope.edit = function (id) {
        $scope.newgame = angular.copy(GameService.get(id));
    }

    $scope.show = function (id) {
        GameService.show(id);
    }
    $scope.goto = function(id) {
        GameService.goto(id);
    }
    $scope.create = function() {
        GameService.create();
    }
}
module.exports = Game;