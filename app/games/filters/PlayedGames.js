var games = function()
{
 return function(items) {
 	console.log("FIlter word gestart");
 	var filtered = [];
 	var username = window.localStorage.getItem('username');
 	if(username == null)
 		return filtered; 
    for (var i = 0; i < items.length; i++) {

       var item = items[i];
       var players = item.players;
       for(var x =0; x<players.length; x++) {
       		if(players[x]._id == username)
       		{
       			console.log("Komt overeen " + i);
       			filtered.push(item);
       			break;
       		}
       }     
    }
    return filtered;
  };
}
module.exports = games;