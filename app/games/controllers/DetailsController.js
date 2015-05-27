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
    //$scope.tiles.splice($scope.tiles.indexOf(tile), 1);
    console.log("Remove tile functie");
    DetailsService.checkTiles(tile, function(tiles)
        {
            console.log("Tegels kloppen");
            $scope.tiles.splice($scope.tiles.indexOf(tiles[0]), 1);
            $scope.tiles.splice($scope.tiles.indexOf(tiles[1]), 1);
        }, function(error, badtiles)
        {
            console.log(error);
        });
    };
}
module.exports = Game;