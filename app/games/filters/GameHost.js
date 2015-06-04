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
 
    return function (array, propertyString){

        console.log("In de host filter " + propertyString);
        var target = window.localStorage.getItem('username');
        console.log("TARGET = " + target);
        if(target == null)
          return [];
        var properties = parseString(propertyString);
 
        return _.filter(array, function(item){
            return getValue(item, properties) == target;
        });
    }
}
module.exports = property;
