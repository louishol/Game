init = function($http){

    this.getDetailsByID = function (id, succes,error) {

    $http.get('http://mahjongmayhem.herokuapp.com/games/'+id).
      success(function(data, status, headers, config) {
        succes(data);
      }).
      error(function(data, status, headers, config) {
        error(data);
      });
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