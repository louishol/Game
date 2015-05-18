var Game = function($scope, $routeParams)
{
    
     $scope.id = $routeParams.id;
     console.log("Ik kom hier " + $scope.id);


	// $scope.games = GameService.list();

    // $scope.saveGame = function () {
    //     GameService.save($scope.newgame);
    //     $scope.newgame = {};
    // }


    // $scope.delete = function (id) {

    //     GameService.delete(id);
    //     if ($scope.newgame.id == id) $scope.newgame = {};
    // }

    // $scope.join = function(id) {
    //     GameService.join(id);
    // }


    // $scope.edit = function (id) {
    //     $scope.newgame = angular.copy(GameService.get(id));
    // }

    // $scope.show = function (id) {
    //     GameService.show(id);
    // }
}
module.exports = Game;