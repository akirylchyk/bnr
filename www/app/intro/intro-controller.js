(function () {
	'use strict';

	var injections = [
		'$scope',
		'$state'
	];

	var controller = function ($scope, $state) {

		window.scope = $scope;

		$scope.goToApp = function () {
			$state.go('tabs.chronicle');
		}

	};

	controller.$inject = injections;

	angular.module('app.intro', []).controller('introController', controller);

})();