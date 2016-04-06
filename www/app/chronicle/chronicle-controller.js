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
			$state.go(cardTypes[id].state);
		};

		var cardTypes = [{
			title: 'Нацыянальная хроніка',
			state: 'tabs.chronicleNational',
			image: 'css/img/6.jpg'
		}, {
			title: 'Савецкая хроніка',
			state: 'tabs.chronicleSoviet',
			image: 'css/img/8.jpg'
		}, {
			title: 'Сучасная хроніка',
			state: 'tabs.chronicleModern',
			image: 'css/img/9.jpg'
		}];

		$scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

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