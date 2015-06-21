describe('Directive', function() {

	var tiledirective;
	var $compile;
	var scope;
	var elm;

	beforeEach(function () {
	   module('app');
	});

	beforeEach( inject(function ($rootScope, $injector, _$compile_) {
	
	 	$compile = _$compile_;
		var tile = {xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" };
	 	var el = angular.element(
	 	'<tile tile={{tile}}></tile>');
	 	scope = $rootScope;
	 	elm = $compile(el)(scope);
    	scope.$digest();

	}));


	it('should render the tile', function() {

 
		//fout
		console.log("Klasse naam " + elm.attr('class'));



	});
    	


	
});