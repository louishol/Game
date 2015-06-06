var matched = function()
{
 return function(items, player) {
  console.log("Naar player " + player + " zoeken");
 	var filtered = [];
  if(items)
  {
      for (var i = 0; i < items.length; i++) {
       var item = items[i];
       var matched = item.match;
       if(matched != null) {
        if(matched.foundBy == player)
        {
          console.log("gevonden");
          filtered.push(item);
        }
       }
    }
  }
 return filtered;
  };
}
module.exports = matched;