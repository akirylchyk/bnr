(function () {
	'use strict';

	var injections = [
		'$scope',
		'soviet',
		'$ionicPopover',
		'national',
		'years',
		'$ionicActionSheet',
		'$state',
		'modern'
	];

	var controller = function ($scope, soviet, $ionicPopover, national, years, $ionicActionSheet, $state, modern) {

		window.scope = $scope;

		$scope.showActionSheet = function () {

			$ionicActionSheet.show({
				titleText: 'Выбраць Хроніку',
				buttons: [
					{text: 'Нацыянальная'},
					{text: 'Сучасная'}
				],
				buttonClicked: function (index) {
					if (index === 0) {
						$state.go('tabs.chronicleNational');
						national.setIndex(20);
					}

					if (index === 1) {
						$state.go('tabs.chronicleModern')
						modern.setIndex(20);
					}
					console.log(index);
					return true;
				}
			});
		};


		var repressionItems = national.getRepressionItems();


		$scope.popover = $ionicPopover.fromTemplate('soviet-popover.html', {
			scope: $scope
		});

		// .fromTemplateUrl() method
		$ionicPopover.fromTemplateUrl('soviet-popover.html', {
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


		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[soviet.getIndex()];

		$scope.selectedPull = $scope.selectedYear.number;

		$scope.$on('morphSelected', function (a, b) {
			if (b) {
				$scope.selectedPull = b.number;
			}
		});

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
			},
			{
				src: 'css/img/8.jpg',
				sub: ''
			},
			{
				src: 'css/img/9.jpg',
				sub: ''
			}
		];

		$scope.prev = function () {
			$scope.year--;
		};

		$scope.next = function () {
			$scope.year++;
		};

		$scope.polaroids = soviet.getPolaroids();

	};

	controller.$inject = injections;

	angular.module('app.soviet', []).controller('sovietController', controller);

})();