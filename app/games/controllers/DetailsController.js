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
    $scope.removeTile = function(tile, $event, id) {
    //$scope.tiles.splice($scope.tiles.indexOf(tile), 1);
    console.log("Remove tile functie " + $event.target);
    DetailsService.checkTiles(tile, $event, function(tiles)
        {
            var index1 = $scope.tiles.indexOf(tiles[0]);
            var index2 = $scope.tiles.indexOf(tiles[1]);   
            DetailsService.postTiles($scope.tiles[index1], $scope.tiles[index2], id, function(data){
                console.log(JSON.stringify(data));
                    $scope.tiles.splice(index1,1);
                    $scope.tiles.splice(index2,1);
                    data[0].tile = tiles[0].tile;
                    data[1].tile = tiles[1].tile;
                    $scope.tiles.push(data[0]);
                    $scope.tiles.push(data[1]);

            }, function(data){
                alert(JSON.stringify(data));
            });
        }, function(error, badtiles)
        {

            console.log(error);
        });
    };
}
module.exports = Game;