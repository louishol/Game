describe('Filter', function() {

	var $filter;

	beforeEach(function () {
	   module('app');
	});

	beforeEach( inject(function (_$filter_) { //<-- Get the filter provider
	   $filter = _$filter_;
	}));

	console.log("should return 1 matches by la.hol");
	it('should return 1 matches by la.hol', function() {

	var dummydata = [{xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" },
	{ xPos: 19, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }, _id: "5541fc5b1872631100678c43" },
	{ xPos: 11, yPos: 10, zPos: 3, tile: { _id: 124, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "124" }, _id: "5541fc5b1872631100678c42" },
	{ xPos: 27, yPos: 7, zPos: 4, tile: { _id: 2, suit: "Circle", name: "1", matchesWholeSuit: false, __v: 0, id: "2" }, _id: "558409d733f25d1100b83cea", match: { foundBy: "la.hol@student.avans.nl", otherTileId: "558409d733f25d1100b83ceb", foundOn: "2015-06-19T12:24:14.180Z" } }];

	var player = "la.hol@student.avans.nl";

	var filtered = $filter('matched')(dummydata, player);

	expect(filtered.length).equal(1);

	});

	console.log("should return 3 not matched tile");
	
	it('should return 3 not matched tile', function() {

	var dummydata = [{xPos: 11, yPos: 12, zPos: 3, tile: {_id: 48,suit: "Bamboo", name: "4", matchesWholeSuit: false,__v: 0, id: "48" }, _id: "5541fc5b1872631100678c44" },
	{ xPos: 19, yPos: 10, zPos: 3, tile: { _id: 125, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "125" }, _id: "5541fc5b1872631100678c43" },
	{ xPos: 11, yPos: 10, zPos: 3, tile: { _id: 124, suit: "Dragon", name: "Red", matchesWholeSuit: false, __v: 0, id: "124" }, _id: "5541fc5b1872631100678c42" },
	{ xPos: 27, yPos: 7, zPos: 4, tile: { _id: 2, suit: "Circle", name: "1", matchesWholeSuit: false, __v: 0, id: "2" }, _id: "558409d733f25d1100b83cea", match: { foundBy: "la.hol@student.avans.nl", otherTileId: "558409d733f25d1100b83ceb", foundOn: "2015-06-19T12:24:14.180Z" } }];

	var filtered = $filter('notmatched')(dummydata);
	expect(filtered.length).equal(3);

	});

	console.log("should return 10 digits");
	
	it('should return 10 digits', function() {

	var digits = $filter('range')(10);
	expect(digits).equal(10);

	});


	it('should return 3 played games', function() {

		var dummydata = [{_id: "5584425b33f25d1100b86e33", players: [{ _id: "la.hol@student.avans.nl", name: "Louis Hol", __v: 0 }]},
		{_id: "5584425b33f25d1100b86e33", players: [{ _id: "jarno@student.avans.nl", name: "jarno", __v: 0 }]},
		{_id: "5584425b33f25d1100b86e33", players: [{ _id: "jarno@student.avans.nl", name: "jarno", __v: 0 }]},
		{_id: "5584425b33f25d1100b86e33", players: [{ _id: "jarno@student.avans.nl", name: "jarno", __v: 0 }]},
		{_id: "5584425b33f25d1100b86e33", players: [{ _id: "la.hol@student.avans.nl", name: "Louis Hol", __v: 0 }]},
		{_id: "5584425b33f25d1100b86e33", players: [{ _id: "la.hol@student.avans.nl", name: "Louis Hol", __v: 0 }]}];

		window.localStorage.setItem('username','la.hol@student.avans.nl');
		var played = $filter('played')(dummydata);
		expect(played.length).equal(3);

	});

});