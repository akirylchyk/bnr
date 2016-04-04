(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$stateParams'
	];

	var controller = function ($scope, chronicle, $stateParams) {

		window.scope = $scope;

		$scope.selectedChronicle = chronicle.getTimelineById($stateParams.id);

		$scope.items = [
			{
				src:'../css/img/1.jpg',
				sub: ''
			},
			{
				src:'../css/img/2.jpg',
				sub: ''
			},
			{
				src:'../css/img/3.jpeg',
				sub: ''
			},
			{
				src:'../css/img/4.jpg',
				sub: ''
			},
			{
				src:'../css/img/5.jpg',
				sub: ''
			},
			{
				src:'../css/img/6.jpg',
				sub: ''
			},
			{
				src:'../css/img/7.jpg',
				sub: ''
			}
		]

	};

	controller.$inject = injections;

	angular.module('app.chronicleDetails', []).controller('chronicleDetailsController', controller);

})();