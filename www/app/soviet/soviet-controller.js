(function () {
	'use strict';

	var injections = [
		'$scope',
		'soviet'
	];

	var controller = function ($scope, soviet) {

		window.scope = $scope;

		$scope.polaroids = soviet.getPolaroids();

	};

	controller.$inject = injections;

	angular.module('app.soviet', []).controller('sovietController', controller);

})();