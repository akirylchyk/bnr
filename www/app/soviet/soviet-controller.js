(function () {
	'use strict';

	var injections = [
		'$scope',
		'soviet'
	];

	var controller = function ($scope, soviet) {

		window.scope = $scope;

		$scope.year = 1925;

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
		]

		$scope.prev = function () {
			$scope.year--;
		};
		
		$scope.next = function () {
			$scope.year++;
		};

		$scope.polaroids = soviet.getPolaroids();

	};

	controller.$inject = injections;

	angular.module('app.soviet', []).controller('sovietController', controller);

})();