(function () {
	'use strict';

	var injections = [
		'$scope',
		'modern',
		'years'
	];

	var controller = function ($scope, modern, years) {

		window.scope = $scope;

		$scope.items = [
			{
				src: '../css/img/1.jpg',
				sub: ''
			},
			{
				src: '../css/img/2.jpg',
				sub: ''
			},
			{
				src: '../css/img/3.jpeg',
				sub: ''
			},
			{
				src: '../css/img/4.jpg',
				sub: ''
			},
			{
				src: '../css/img/5.jpg',
				sub: ''
			},
			{
				src: '../css/img/6.jpg',
				sub: ''
			},
			{
				src: '../css/img/7.jpg',
				sub: ''
			}
		];


		$scope.translated = false;

		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[18];

		$scope.words = modern.getWords();

		$scope.prev = function () {
			$scope.year--;
		};

		$scope.next = function () {
			$scope.year++;
		};

	};

	controller.$inject = injections;

	angular.module('app.modern', []).controller('modernController', controller);

})();