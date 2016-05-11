(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$state',
		'$ionicPopover',
		'national',
		'$ionicSwipeCardDelegate',
		'years',
		'$ionicActionSheet',
		'soviet',
		'modern'
	];

	var controller = function ($scope, chronicle, $state, $ionicPopover, national, $ionicSwipeCardDelegate, years, $ionicActionSheet, soviet, modern) {

		window.scope = $scope;

		$scope.showActionSheet = function () {

			$ionicActionSheet.show({
				titleText: 'Выбраць Хроніку',
				buttons: [
					{text: 'Савецкая'},
					{text: 'Сучасная'}
				],
				buttonClicked: function (index) {
					if (index === 0) {
						$state.go('tabs.chronicleSoviet');
						soviet.setIndex(20);
					}

					if (index === 1) {
						$state.go('tabs.chronicleModern');
						modern.setIndex(20);
					}
					console.log(index);
					return true;
				}
			});
		};


		var repressionItems = national.getRepressionItems();

		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[national.getIndex()];

		$scope.selectedPull = $scope.selectedYear.number;

		$scope.$on('morphSelected', function (a, b) {
			if (b) {
				$scope.selectedPull = b.number;
			}
		});

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


	};

	controller.$inject = injections;

	angular.module('app.national', []).controller('nationalController', controller);

})();