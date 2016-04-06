(function () {
	'use strict';

	var injections = [
		'$scope',
		'modern'
	];

	var controller = function ($scope, modern) {

		window.scope = $scope;

		$scope.translated = false;

		$scope.items = modern.getTimelineItems();

		$scope.selectedItem = $scope.items[18];

		$scope.words = modern.getWords();

	};

	controller.$inject = injections;

	angular.module('app.modern', []).controller('modernController', controller);

})();