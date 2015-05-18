var Game = function($scope, $routeParams, DetailsService)
{
    var id = $routeParams.id;
    $scope.test = "ddddd";
    $scope.username = 'World';
    $scope.game = "";
    
    DetailsService.getDetailsByID(id, function(data)
        {
            console.log(data);
            $scope.game =  data;

        }, function(error) {
            $scope.game = "";
        });


    DetailsService.getTilesByID(id, function(data)
        {
            $scope.tiles = data;
            console.log("Tile informatie " + data);

        }, function(error) {
            $scope.tiles = "";
        });

    $scope.removeTile = function(tile) {
        $scope.tiles.splice($scope.tiles.indexOf(tile), 1);
    };
}
module.exports = Game;