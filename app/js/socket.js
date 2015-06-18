var init = function()
{
	var socket;
	this.connectSocket = function () {
		socket = io('http://mahjongmayhem.herokuapp.com?gameId=55730f54657fea110053518c');
		console.log("bezig met connecten naar socket");
		socket.on('start', function(){});
		socket.on('match', function(data){alert("match " + data); console.log(JSON.stringify(data));});
		socket.on('playerjoined', function(data){alert("PLAYERJOIND EVENGT " + data);})
		socket.on('end', function(){});
		alert("ok");
	}
}
module.exports = init;
