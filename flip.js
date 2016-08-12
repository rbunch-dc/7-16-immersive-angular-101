var coinFlipApp = angular.module('coinFlipApp', []);
coinFlipApp.controller('headsOrTailsController',function($scope){
	$scope.test = "It works!!";

	//The user clicked on heads - ng-click="heads()" in the view
	$scope.heads = function(){
		console.log("Test heads");
		$scope.userGuess = "heads";
		var flipResult = flip();
 		$scope.guess = true;
 		if(flipResult.coinFlipResult == 'heads'){
 			$scope.message = "You won!";
 		}else{
 			$scope.message = "You lost!";
 		}
 		$scope.coin = flipResult.coinImg;
	}

	//The user clicked on tails - ng-click="tails()" in the view
	$scope.tails = function(){
		$scope.userGuess = "tails";
		var flipResult = flip();
 		$scope.guess = true;
 		if(flipResult.coinFlipResult == 'tails'){
 			$scope.message = "You won!";
 		}else{
 			$scope.message = "You lost!";
 		}
 		$scope.coin = flipResult.coinImg;		
	};

	//The user clicked on playGame - ng-click="playGame()" in the view
 	$scope.playGame = function(){
 		console.log("Test play");
 		$scope.guess = false;
 		$scope.message = null;
 	}

 	var flip = function(){
 		var rand = Math.random();
 		var flipResult = {
 			coinImg: null,
 			coinFlipResult: null,
 		}
 		if(rand > .5){
 			flipResult.coinImg = "quarter-front.png";
 			flipResult.coinFlipResult = "heads";
 		}else{
 			flipResult.coinImg = "quarter-back.png";
 			flipResult.coinFlipResult = "tails";
 		}
 		return flipResult;
 	}

});

