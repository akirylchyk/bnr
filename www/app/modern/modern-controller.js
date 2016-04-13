(function () {
	'use strict';

	var injections = [
		'$scope',
		'modern'
	];

	var controller = function ($scope, modern) {

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

		$scope.selectedItem = $scope.items[18];

		$scope.words = modern.getWords();

		$scope.year = 1925;

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