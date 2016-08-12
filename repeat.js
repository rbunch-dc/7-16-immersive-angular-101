var repeatApp = angular.module('repeatApp', []);
repeatApp.controller('repeatController', function($scope){
	
	$scope.class = ["Shirlette","Jackson",
		"JT",
		"Summer"
	];

	$scope.removeStudent = function(index){
		$scope.class.splice(index,1);
	}

	$scope.addStudent = function(){
		$scope.class.push($scope.newStudent);
		$scope.newStudent = "";
	}

});

