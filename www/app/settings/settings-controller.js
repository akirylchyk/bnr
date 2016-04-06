(function () {
	'use strict';

	var injections = [
		'$scope'
	];

	var controller = function ($scope, $ionicSwipeCardDelegate) {

		window.scope = $scope;
		
	};

	controller.$inject = injections;

	angular.module('app.settings', []).controller('settingsController', controller);

})();