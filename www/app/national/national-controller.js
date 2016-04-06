(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$state'
	];

	var controller = function ($scope, chronicle, $state) {

		window.scope = $scope;

		$scope.goToDetails = function (id) {
			$state.go('tabs.chronicleDetails', {id: id});
		};

		$scope.timeline = chronicle.getTimeline();

		$scope.items = [
			{number: 1900},
			{number: 1901},
			{number: 1902},
			{number: 1903},
			{number: 1904},
			{number: 1905},
			{number: 1906},
			{number: 1907},
			{number: 1908},
			{number: 1909},
			{number: 1910},
			{number: 1911},
			{number: 1912},
			{number: 1913},
			{number: 1914},
			{number: 1915},
			{number: 1916},
			{number: 1917},
			{number: 1918},
			{number: 1919},
			{number: 1920},
			{number: 1921},
			{number: 1922},
			{number: 1923},
			{number: 1924},
			{number: 1925}
		];

		$scope.selectedItem = $scope.items[18];

	};

	controller.$inject = injections;

	angular.module('app.national', []).controller('nationalController', controller);

})();