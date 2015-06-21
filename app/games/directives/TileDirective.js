var TileDirective = function(){

	var highlight = [];
	var i =1

	return {
		restrict: 'E',
		scope: {
			tile: "=",
		},
	    link: function (scope, element, attrs) {

				var tile = scope.tile;
	   			var cssclass = "tile " + tile.tile.suit + tile.tile.name;

				var left = tile.xPos * 21;
				var top = tile.yPos *32 + 100 + tile.zPos * 6;
				var z = tile.zPos * 5;

				element.css({'left': left +"px"});
				element.css({'top': top +"px"});
				element.css({'z-index': z});
				element.addClass(cssclass);
				
				element.bind('click', function()
				{
					if(highlight.length == 0) {
						highlight.push(element);
						highlight[0].addClass("highlight");
					}
					else if(highlight.length == 1) {

						highlight[0].removeClass("highlight");
						highlight = [];
					}
				});
			}
		    		
	};
};
module.exports = TileDirective;