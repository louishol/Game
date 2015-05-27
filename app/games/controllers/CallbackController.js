var callback = function($location)
{
    var parameters = $location.search();
    window.localStorage.setItem('username', parameters.username);
    window.localStorage.setItem('token', parameters.token);
    $location.url('/index');
    window.location.href = "index.html";
}
module.exports = callback;