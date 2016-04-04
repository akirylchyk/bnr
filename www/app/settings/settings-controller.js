(function () {
	'use strict';

	var injections = [
		'$scope'
	];

	var controller = function ($scope) {

		window.scope = $scope;

	};

	controller.$inject = injections;

	angular.module('app.settings', []).controller('settingsController', controller);

})();