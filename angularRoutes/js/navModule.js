// Assign a variable to our angular.module. We need to include ngRoute in the dependencies because our app needs it!
// If Angular can't find the module (included in the routes script) it will crash!
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);

// Assign a controller to our main module. This will never go away
navRoutes.controller('navController', function($scope, $http){
	$scope.message = "This is teh nav controller message!!";
});


// Attach a config to our module. Specifically bring in the $routeProvider service.
// This service is available because of the ngRoute above!
// It has a "when" method. It wathes the URL and "when" there is a match, it files the callback
// It will set the templateUrl which will go into the ng-view in the view.
// It will set the controller to that view.
// As a last resort we have an "otherwise" which will act as a catch all, or an "else"
navRoutes.config(function($routeProvider){
	$routeProvider.when('/locations',{
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'contactController'		
	});
	$routeProvider.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'		
	});
	$routeProvider.otherwise('#');

});