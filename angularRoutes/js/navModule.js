var navRoutes = angular.module('navRoutes', ['ngRoute']);

navRoutes.controller('navController', function($scope, $http){
	$scope.message = "I'm working!!";
});

navRoutes.controller('locationsController', function($scope){
	$scope.message = "Test locations";
})

navRoutes.controller('contactController', function($scope){
	$scope.message = "Test Contact";
})

navRoutes.controller('aboutController', function($scope){
	$scope.message = "Test About";
})


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