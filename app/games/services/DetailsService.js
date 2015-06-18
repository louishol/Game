init = function($http, socket){

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



this.isinbetween = function(value1, value2, range1, range2)
{

  //console.log("Value " + value1 +" tussen de " + range1 +" en " + range2);
 //console.log("Value " + value2 +" tussen de " + range1 +" en " + range2);
  
  return (value1 >= range1 && value1 <= range2 || value2 >= range1 && value2 <= range2);
}


this.tileValidation = function(tiles, tile)
{

  console.log("Tile ligt op positie " + tile.xPos + " | " + tile.yPos);
  var leftside = false;
  var rightside = false;
  var up = false;
  var valid = true;

  var width = 42;
  var height = 64;

  var leftpx = tile.xPos *32;
  var toppx = tile.yPos *32 + 100 + tile.zPos *6;
  console.log("Top = " + toppx);

  var leftpxmax = leftpx + width; 
  var toppxmax = toppx = height;


  for(var t in tiles)
  {
    var _tile = tiles[t];
    var _leftpx = _tile.xPos *32;
    var _toppx = _tile.yPos *32 + 100 + _tile.zPos *6;

    var _leftpxmax = _leftpx + width; 
    var _toppxmax = _toppx + height;

    if(!_tile.match)
    {
      if(_tile.xPos == tile.xPos +1 && _tile.yPos == tile.yPos) {
        console.log("Er ligt er 1 rechts naast " + JSON.stringify(_tile));
        rightside = true;
      } 
      if(_tile.xPos == tile.xPos -1 && _tile.yPos == tile.yPos) {
        console.log("Er ligt er 1 links naast " + JSON.stringify(_tile));
        leftside = true;
      }



      var xinbetween = this.isinbetween(_leftpx, _leftpxmax, leftpx, leftpxmax);
      var yinbetween = this.isinbetween(_toppx, _toppxmax, ( tile.yPos *32 + 100 + tile.zPos *6),  ((tile.yPos *32 + 100 + tile.zPos *6)+64));
      var zhigher = (_tile.zPos > tile.zPos);

      if(xinbetween == true && yinbetween == true && _tile.zPos > tile.zPos)
      {
        console.log("Er ligt er 1 boven " +  JSON.stringify(_tile));
        up = true;
      }
    }
  }
  //console.log("Linksvrij " + leftside + " | rechtsvrij " + rightside + " | bovenvrij " + up);
  if(leftside == true && rightside == true || up == true)
  {
    valid = false;
  }
return valid;
}


this.findIndexByTile = function(tiles, tile)
{
  for(var t in tiles)
  {
   
    if(tiles[t]._id == tile._id)
    {
      return t;
    }
  }
  return null;
}

this.postTiles = function(tile1, tile2, gameid, success, error)
{
  var id1 = tile1._id;
  var id2 = tile2._id; 
  var match = {"tile1Id": id1, "tile2Id": id2};

  $http.post('http://mahjongmayhem.herokuapp.com/games/'+gameid+"/Tiles/matches", JSON.stringify(match)).
      success(function(data, status, headers, config) {
        success(data);
      }).
      error(function(data, status, headers, config) {
        error(data);
      });
} 

this.checkTiles = function(tile, tiles, $event, succes, error){
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

                  var valid1 = this.tileValidation(tiles, checktiles[0]);
                  var valid2 = this.tileValidation(tiles, checktiles[1]);
             
                  console.log("TIle1 = " + valid1);
                  console.log("Tile2 = " +valid2);
                  if(valid1 && valid2)
                  {
                    console.log("Jajajaj");
                    succes(checktiles);
                  } else {
                    highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
                    highlight = [];
                    error("Tiles liggen niet vrij", checktiles);
                  } 

              } else {  
                  console.log($event.target.className.replace(/\bhighlight\b/,''));
                  highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
                  highlight = [];
                  error("Tiles komen niet overeen", checktiles);
              }
            } else {  

            if(checktiles[0].tile.suit == checktiles[1].tile.suit && checktiles[0].tile.name == checktiles[1].tile.name )
              {

                  var valid1 = this.tileValidation(tiles, checktiles[0]);
                  var valid2 = this.tileValidation(tiles, checktiles[1]);
                  console.log("TIle1 = " + valid1);
                  console.log("Tile2 = " +valid2);

                  if(valid1 && valid2)
                  {
                    console.log("Jajajaj");
                    succes(checktiles);
                  } else {
                    highlight[0].className = highlight[0].className.replace(/\bhighlight\b/,'');
                    highlight = [];
                    error("Tiles liggen niet vrij", checktiles);
                  } 

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