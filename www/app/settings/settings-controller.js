(function () {
	'use strict';

	var injections = [
		'$scope',
		'$state'
	];

	var controller = function ($scope, $state) {

		window.scope = $scope;

		$scope.goToSignUp = function () {
			$state.go('signup');
		}

	};

	controller.$inject = injections;

	angular.module('app.settings', []).controller('settingsController', controller);

})();