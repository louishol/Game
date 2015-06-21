describe('Services', function() {


	var detailsservice; 
	var gameservice;

	beforeEach(function () {
	   module('app');
	});

	beforeEach(inject(function ($injector)
	{
		detailsservice = $injector.get('DetailsService')
		gameservice = $injector.get('GameService');
	}));


	it('Tile should not be able to match', function() {

	var dummydata = [{xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" },
	{ xPos: 20, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }, _id: "5541fc5b1872631100678c43" },
	{ xPos: 24, yPos: 10, zPos: 3, tile: { _id: 124, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "124" }, _id: "5541fc5b1872631100678c42" },
	{ xPos: 27, yPos: 7, zPos: 4, tile: { _id: 2, suit: "Circle", name: "1", matchesWholeSuit: false, __v: 0, id: "2" }, _id: "558409d733f25d1100b83cea", match: { foundBy: "la.hol@student.avans.nl", otherTileId: "558409d733f25d1100b83ceb", foundOn: "2015-06-19T12:24:14.180Z" } }];

	var tile = { xPos: 22, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }};
	var valid = detailsservice.tileValidation(dummydata, tile);
	expect(valid).equal(false);

	});

	
	it('Tile should not able to match', function() {

	var dummydata = [{xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" },
	{ xPos: 18, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }, _id: "5541fc5b1872631100678c43" },
	{ xPos: 24, yPos: 10, zPos: 3, tile: { _id: 124, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "124" }, _id: "5541fc5b1872631100678c42" },
	{ xPos: 27, yPos: 7, zPos: 4, tile: { _id: 2, suit: "Circle", name: "1", matchesWholeSuit: false, __v: 0, id: "2" }, _id: "558409d733f25d1100b83cea", match: { foundBy: "la.hol@student.avans.nl", otherTileId: "558409d733f25d1100b83ceb", foundOn: "2015-06-19T12:24:14.180Z" } }];

	var tile = { xPos: 22, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }};
	var valid = detailsservice.tileValidation(dummydata, tile);
	expect(valid).equal(true);

	}); 

	it('Should return index of 2', function() {

	var dummydata = [{xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" },
	{ xPos: 18, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }, _id: "5541fc5b1872631100678c43" },
	{ xPos: 24, yPos: 10, zPos: 3, tile: { _id: 124, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "124" }, _id: "5541fc5b1872631100678c42" },
	{ xPos: 27, yPos: 7, zPos: 4, tile: { _id: 2, suit: "Circle", name: "1", matchesWholeSuit: false, __v: 0, id: "2" }, _id: "558409d733f25d1100b83cea", match: { foundBy: "la.hol@student.avans.nl", otherTileId: "558409d733f25d1100b83ceb", foundOn: "2015-06-19T12:24:14.180Z" } }];

	var tile = dummydata[2];
	var index = detailsservice.findIndexByTile(dummydata, tile);
	expect(index).equal('2');

	});

});