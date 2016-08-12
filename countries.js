var countriesApp = angular.module('countriesApp',[]);
countriesApp.controller('countriesController', function($scope){

	$scope.Math = window.Math;
	$scope.reverse = true;

	$scope.countries = [
		{
			name: "United States",
			goldMedals: 3,
			silverMedals: 5,
			bronzeMedals: 4,
			img: 'https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png'

		},
		{
			name: "Italy",
			goldMedals: 3,
			silverMedals: 3,
			bronzeMedals: 2,
			img: 'https://ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png'
		},
		{
			name: "China",
			goldMedals: 3,
			silverMedals: 2,
			bronzeMedals: 3,
			img: 'https://ssl.gstatic.com/onebox/media/sports/logos/8Cr5Gw-79PpIX2rIEZ7Pvg_48x48.png'
		},
		{
			name: "Austraila",
			goldMedals: 3,
			silverMedals: 0,
			bronzeMedals: 3,
			img: 'https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png'
		}
	];

});