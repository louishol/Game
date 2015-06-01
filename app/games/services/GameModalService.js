init = function($http)
{
	this.create = function(newgame) {
	$http.post('http://mahjongmayhem.herokuapp.com/games', JSON.stringify(newgame)).
      success(function(data, status, headers, config) {
      	alert("Spel in aangemaakt");
      }).
      error(function(data, status, headers, config) {
        alert("Er ging iets fout");
      });

	}
}
module.exports = init;