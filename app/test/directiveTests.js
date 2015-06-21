describe('Directive', function() {

	var tiledirective;
	var $compile;
	var scope;

	beforeEach(function () {
	   module('app');
	});

	beforeEach( inject(function ($rootScope, $injector, _$compile_) {
	   $compile = _$compile_;
	   scope = $rootScope.$new();
	 
	}));


	it('should render the tile', function() {

	// var $scope = rootScope.$new();

	// var dummydata = 

	// $scope.tile = dummydata;

	// var element = $compile('<tile tile="tile"</tile>')($scope);
	// $scope.$digest();

	// console.log( " Dit is de elemenet " + element.attr("class"));
	// expect(element.attr("class")).to.have.string('Bamboo4'); 


	  	// scope = rootScope.$new();
    // 	element = '<tile tile="tile"></tile>';
    // 	scope.tile = {xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" };
    // 	var element = $compile(element)(scope);
    // 	scope.$digest();

    // 	console.log("KLASSE  = " + element.attr("class"))


    var element = getCompiledElement();

    console.log("KLASSE == " + element);


	});

	function getCompiledElement(){
  var element = angular.element('<tile tile="tile"></tile>');
 scope.tile = {xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" };
    var compiledElement = $compile(element)(scope);
   scope.$digest();
  return compiledElement;
}





});