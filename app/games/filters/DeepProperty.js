

var property = function()
{
    
      function parseString(input){

        if(input)
        {
             console.log("DIt is de input " + input);
            return input.split(".");
        }
        return null;
       
    }

    function getValue(element, propertyArray){
        var value = element;
        
        _.forEach(propertyArray, function(property){
            value = value[property];
        });
 
        return value;
    }
 
    return function (array, propertyString, target){
        console.log("wrodt gestart");
        var properties = parseString(propertyString);
        console.log("TARGET " + target);
        console.log("PROP " + properties);
        if(properties)
        {
             return _.filter(array, function(item){
            return getValue(item, properties) == target;
            });
        }
        return false;
    }
}
module.exports = property;