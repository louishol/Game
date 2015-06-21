var Game = function($scope, $routeParams, DetailsService)
{
    var socket;
    var tiles = [];
    var id = $routeParams.id
    
    $scope.username = 'World';
    $scope.game = "";
    
    
    socket = io('http://mahjongmayhem.herokuapp.com?gameId='+id);
    socket.on('match', function(data) {

        var tile1 = data[0];
        var tile2 = data[1];

        var index1 = DetailsService.findIndexByTile($scope.tiles, tile1);
        var index2 = DetailsService.findIndexByTile($scope.tiles, tile2);

        $scope.tiles[index1].match = tile1.match;
        $scope.tiles[index2].match = tile2.match;
        $scope.$apply() 

    });

    socket.on('playerjoined', function(data){
        console.log("Playerjoin " + JSON.stringify(data));
        alert("Plauerjoined " + JSON.stringify(data));
    });

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
    
    DetailsService.checkTiles(tile, tiles, $event, function(tiles)
        {
            var index1 = $scope.tiles.indexOf(tiles[0]);
            var index2 = $scope.tiles.indexOf(tiles[1]);   
            DetailsService.postTiles($scope.tiles[index1], $scope.tiles[index2], id, function(data){
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