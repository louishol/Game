var Game = function($scope, $routeParams, DetailsService)
{

    this.init = function(){
       
    }

    var id = $routeParams.id;
  
    $scope.username = 'World';
    $scope.game = "";
    var tiles = [];
    
    DetailsService.getDetailsByID(id, function(data)
        {
            console.log(data);
            $scope.game =  data;

        }, function(error) {
            $scope.game = "";
        });


    DetailsService.getTilesByID(id, function(data)
        {

            for(var tile in data)
            {
                data[tile].clicked = "none";
                tiles.push(data[tile]);
            }
            $scope.tiles = tiles;

        }, function(error) {
            $scope.tiles = "";
        });

    $scope.removeTile = function(tile, $event) {
    //$scope.tiles.splice($scope.tiles.indexOf(tile), 1);
    console.log("Remove tile functie " + $event.target);
   
    DetailsService.checkTiles(tile, $event, function(tiles)
        {
            var index1 = $scope.tiles.indexOf(tiles[0]);
            var index2 = $scope.tiles.indexOf(tiles[1]);   
            $scope.tiles[index1].clicked = "speler1";
            $scope.tiles[index2].clicked = "speler1";

        }, function(error, badtiles)
        {

            console.log(error);
        });
    };
}
module.exports = Game;