var init = function($scope) {
		
		$scope.onLoginClick = function(){
			var uri = "http://localhost:8080/#/authcallback";
			var res = "http://mahjongmayhem.herokuapp.com/auth/avans?callbackUrl=" + encodeURIComponent(uri);
			window.location.href = res;
		
		}
}
module.exports = init;