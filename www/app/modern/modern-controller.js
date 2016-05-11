(function () {
	'use strict';

	var injections = [
		'$scope',
		'modern',
		'years',
		'$state',
		'$ionicActionSheet',
		'national',
		'soviet'
	];

	var controller = function ($scope, modern, years, $state, $ionicActionSheet, national, soviet) {

		window.scope = $scope;

		$scope.items = [
			{
				src: 'css/img/1.jpg',
				sub: ''
			},
			{
				src: 'css/img/2.jpg',
				sub: ''
			},
			{
				src: 'css/img/3.jpeg',
				sub: ''
			},
			{
				src: 'css/img/4.jpg',
				sub: ''
			},
			{
				src: 'css/img/5.jpg',
				sub: ''
			},
			{
				src: 'css/img/6.jpg',
				sub: ''
			},
			{
				src: 'css/img/7.jpg',
				sub: ''
			}
		];


		$scope.showActionSheet = function () {

			$ionicActionSheet.show({
				titleText: 'Выбраць Хроніку',
				buttons: [
					{text: 'Нацыянальная'},
					{text: 'Савецкая'}
				],
				buttonClicked: function (index) {
					if (index === 0) {
						$state.go('tabs.chronicleNational');
						national.setIndex(20);
					}

					if (index === 1) {
						$state.go('tabs.chronicleSoviet');
						soviet.setIndex(20);
					}
					console.log(index);
					return true;
				}
			});
		};


		var cardTypes = modern.getCards();

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


		$scope.translated = false;

		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[modern.getIndex()];
		
		$scope.selectedPull = $scope.selectedYear.number;

		$scope.$on('morphSelected', function (a, b) {
			if (b) {
				$scope.selectedPull = b.number;
			}
		});

		$scope.words = modern.getWords();

		$scope.prev = function () {
			$scope.year--;
		};

		$scope.next = function () {
			$scope.year++;
		};

	};

	controller.$inject = injections;

	angular.module('app.modern', []).controller('modernController', controller);

})();