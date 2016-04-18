(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$state',
		'$ionicPopover',
		'national',
		'$ionicSwipeCardDelegate',
		'years'
	];

	var controller = function ($scope, chronicle, $state, $ionicPopover, national, $ionicSwipeCardDelegate, years) {

		window.scope = $scope;

		var repressionItems = national.getRepressionItems();

		$scope.popover = $ionicPopover.fromTemplate('my-popover.html', {
			scope: $scope
		});

		// .fromTemplateUrl() method
		$ionicPopover.fromTemplateUrl('my-popover.html', {
			scope: $scope
		}).then(function (popover) {
			$scope.popover = popover;
		});

		$scope.openPopover = function ($event, index) {
			$scope.repression = repressionItems[index];
			$scope.popover.show($event);
		};
		$scope.closePopover = function () {
			$scope.popover.hide();
		};
		//Cleanup the popover when we're done with it!
		$scope.$on('$destroy', function () {
			$scope.popover.remove();
		});
		// Execute action on hide popover
		$scope.$on('popover.hidden', function () {
			// Execute action
		});
		// Execute action on remove popover
		$scope.$on('popover.removed', function () {
			// Execute action
		});


		



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











		$scope.goToDetails = function (id) {
			$state.go('tabs.chronicleDetails', {id: id});
		};

		$scope.timeline = chronicle.getTimeline();

		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[18];

	};

	controller.$inject = injections;

	angular.module('app.national', []).controller('nationalController', controller);

})();