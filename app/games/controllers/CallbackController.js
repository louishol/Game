var callback = function($location)
{
    var parameters = $location.search();
    
    window.localStorage.setItem('username', locationObject.username);
    window.localStorage.setItem('token', locationObject.token);
    console.log("Callback " + locationObject.username);

    $location.url('/index');
    window.location.reload();

}
module.exports = callback;