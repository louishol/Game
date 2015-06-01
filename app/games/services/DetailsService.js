init = function($http){


var checktiles = [];
var highlight = [];

    this.getDetailsByID = function (id, succes,error) {

    $http.get('http://mahjongmayhem.herokuapp.com/games/'+id).
      success(function(data, status, headers, config) {
        succes(data);
      }).
      error(function(data, status, headers, config) {
        error(data);
      });
    }

this.checkTiles = function(tile, $event, succes, error){
      if(checktiles.length == 0) {
        checktiles.push(tile);
        $event.target.className += " highlight";
        highlight.push($event.target);
      }
      else if(checktiles.length == 1) {
        if(checktiles[0] != tile)
        { 
           checktiles.push(tile); 
           if(checktiles[0].tile.matchesWholeSuit == true)
            {
              if(checktiles[0].tile.suit == checktiles[1].tile.suit)
              {
                  succes(checktiles);
              } else {  
                  console.log($event.target.className.replace(/\bhighlight\b/,''));
                  highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
                  highlight = [];
                  error("Tiles komen niet overeen", checktiles);
              }
            } else {  

            if(checktiles[0].tile.suit == checktiles[1].tile.suit && checktiles[0].tile.name == checktiles[1].tile.name )
              {
                succes(checktiles);
              } else {
                console.log($event.target.className.replace(/\bhighlight\b/,''));
                highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
                highlight = [];
                error("Tiles komen niet overeen", checktiles);
              }
          } 
          checktiles = [];
        } else {
          console.log($event.target.className.replace(/\bhighlight\b/,''));
           highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
           highlight = [];
           checktiles = [];
            error("Tiles zijn dezelfdes", checktiles);
        }
      }
    }

    this.getTilesByID = function (id, succes,error) {

    $http.get('http://mahjongmayhem.herokuapp.com/games/'+id+'/tiles').
      success(function(data, status, headers, config) {
        succes(data);
      }).
      error(function(data, status, headers, config) {
        error(data);
      });
    }
};
module.exports = init