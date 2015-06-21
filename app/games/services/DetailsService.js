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
 
   
  

this.tileValidation = function(tiles, tile)
{

  var leftside = false;
  var rightside = false;
  var up = false;
  var valid = true;
 
  for(var t in tiles)
  {
    var _tile = tiles[t]; 
    if(!_tile.match)
    {  

      if((_tile.xPos == tile.xPos +2 && _tile.yPos == tile.yPos &&  _tile.zPos >= tile.zPos) || (_tile.xPos == tile.xPos +2 && _tile.yPos-1 == tile.yPos &&  _tile.zPos >= tile.zPos) || (_tile.xPos == tile.xPos +2 && _tile.yPos+1 == tile.yPos &&  _tile.zPos >= tile.zPos))
      {
 //      console.log("Er ligt er 1 rechts naast " + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        rightside = true;
      }
      else if((_tile.xPos == tile.xPos -2 && _tile.yPos == tile.yPos && _tile.zPos >= tile.zPos ) || (_tile.xPos == tile.xPos -2 && _tile.yPos-1 == tile.yPos &&  _tile.zPos >= tile.zPos) || (_tile.xPos == tile.xPos -2 && _tile.yPos+1 == tile.yPos &&  _tile.zPos >= tile.zPos))
      {
   //     console.log("Er ligt er 1 links naast " + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        leftside = true;
      }


      else if(_tile.xPos - tile.xPos == -1 && _tile.yPos - tile.yPos == 0 && _tile.zPos >= tile.zPos) {

        up = true;
      }

      else if(_tile.xPos - tile.xPos == +1 && _tile.yPos - tile.yPos == 0 && _tile.zPos >= tile.zPos) {

        up = true;
      }

      else if(_tile.xPos - tile.xPos == 1 && _tile.yPos - tile.yPos == 1 && _tile.zPos > tile.zPos)
      {
       // console.log("Er ligt er 1 rechtsonder boven " + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
       up = true;
      }
      else if(_tile.xPos - tile.xPos == 1 && _tile.yPos - tile.yPos == -1 && _tile.zPos > tile.zPos)
      {
       //console.log("Er ligt er 1 rechtsboven boven " + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      }
      else if(_tile.xPos - tile.xPos == -1 && _tile.yPos - tile.yPos == -1 && _tile.zPos > tile.zPos)
      {
      //console.log("Er ligt er 1 linksboven boven" + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      }
      else if(_tile.xPos - tile.xPos == -1 && _tile.yPos - tile.yPos == 1 && _tile.zPos > tile.zPos)
      {
      //  console.log("Er ligt er 1 linksonder boven" + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      } 
      else if(_tile.xPos == tile.xPos && _tile.yPos == tile.yPos && _tile.zPos > tile.zPos)
      {
       // console.log("Er ligt er 1 bovenop" + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      }
      else if(_tile.xPos == tile.xPos && _tile.yPos - tile.yPos == -1 && _tile.zPos > tile.zPos)
      {
        //console.log("Er ligt er 1 boven bovenop" + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      }
      else if(_tile.xPos == tile.xPos && _tile.yPos - tile.yPos == 1 && _tile.zPos > tile.zPos)
      {
        //console.log("Er ligt er 1 onder bovenop" + JSON.stringify(tile) + " | " + JSON.stringify(_tile));
        up = true;
      }
    }
  }
  console.log("Rechterkantbezet " + rightside + " | Linkerkantbezet " + leftside + " Bovenkantbezet " + up);
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
                  if(valid1 && valid2)
                  {
                    succes(checktiles);
                  } else {
                    error("Tiles liggen niet vrij", checktiles);
                  } 

              } else {  
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
                    error("Tiles liggen niet vrij", checktiles);
                  } 

              } else {
                error("Tiles komen niet overeen", checktiles);
              }
          } 
        } else {
          
            error("Tiles zijn dezelfdes", checktiles);
        }
        checktiles = [];
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