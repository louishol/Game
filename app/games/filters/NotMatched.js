var games = function()
{
 return function(items) {
 	var filtered = [];
  if(items)
  {
        for (var i = 0; i < items.length; i++) {
       var item = items[i];
       var matched = item.match;
       if(matched == null) {
        filtered.push(item);
       }
    }
  }
 return filtered;
  };
}
module.exports = games;