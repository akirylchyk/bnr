(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$state'
	];

	var controller = function ($scope, chronicle, $state, $ionicSwipeCardDelegate) {

		window.scope = $scope;

		$scope.goToDetails = function (id) {
			id = typeof id === 'undefined' ? 0 : id;
			$state.go(cardTypes[id].state);
		};

		var cardTypes = chronicle.getCards();

		$scope.cards = [];

		$scope.cards.push(angular.extend({}, cardTypes[0]));

		$scope.cardSwiped = function (index) {
			$scope.addCard(index);
		};

		$scope.cardDestroyed = function (index) {
			$scope.cards.splice(index, 1);
		};

		$scope.addCard = function (index) {
			$scope.index = $scope.index ? $scope.index : 0;
			if (typeof index !== 'undefined') {
				$scope.index = $scope.index < cardTypes.length - 1 ? $scope.index + 1 : 0;
			}
			$scope.cards.push(angular.extend({}, cardTypes[$scope.index]));
		};

		$scope.goAway = function () {
			var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
			card.swipe();
		};

	};

	controller.$inject = injections;

	angular.module('app.chronicle', []).controller('chronicleController', controller);

})();