var modal = function($scope, GameModalService) {

	$scope.newgame = {minPlayers:1, maxPlayers:1, templateName:"Shanghai"};

	$scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  	};

	$scope.create = function()
	{
		GameModalService.create($scope.newgame);
	}
}
module.exports = modal;