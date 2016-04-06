(function () {
	'use strict';

	var injections = [
		'$scope'
	];

	var controller = function ($scope) {

		window.scope = $scope;
		
	};

	controller.$inject = injections;

	angular.module('app.soviet', []).controller('sovietController', controller);

})();