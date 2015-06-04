

var property = function()
{
      function parseString(input){
        return input.split(".");
    }
 
    function getValue(element, propertyArray){
        var value = element;
 
        _.forEach(propertyArray, function(property){
            value = value[property];
        });
 
        return value;
    }
 
    return function (array, propertyString, target){
        var properties = parseString(propertyString);
     console.log("TARGET " + target);
        return _.filter(array, function(item){
            return getValue(item, properties) == target;
        });
    }
}
module.exports = property;