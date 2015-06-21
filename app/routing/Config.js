module.exports 			= function($routeProvider, $locationProvider)
{
  $routeProvider.
  when('/beheer', {
   	  templateUrl: "../beheer.html",
      controller: "BeheerController",
      controllerAs: "beheer"
  }).
  when('/authcallback', {
       templateUrl: "../callbackurl.html",
      controller: "CallbackController",
      controllerAs: "callback"
  }).
  when('/create', {
       templateUrl: "../gamemodal.html",
      controller: "GameModalController",
      controllerAs: "modal"
  }).  
   when('/details/:id', {
       templateUrl: "../details.html",
      controller: "DetailsController", 
      controllerAs: "details"
  });
};


