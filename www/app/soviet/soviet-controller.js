(function () {
	'use strict';

	var injections = [
		'$scope',
		'soviet',
		'$ionicPopover',
		'national',
		'years'
	];

	var controller = function ($scope, soviet, $ionicPopover, national, years) {

		window.scope = $scope;


		var repressionItems = national.getRepressionItems();

		// .fromTemplate() method
		var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

		$scope.popover = $ionicPopover.fromTemplate(template, {
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


		$scope.years = years.getYears();

		$scope.selectedYear = $scope.years[18];
		
		$scope.items = [
			{
				src: '../css/img/1.jpg',
				sub: ''
			},
			{
				src: '../css/img/2.jpg',
				sub: ''
			},
			{
				src: '../css/img/3.jpeg',
				sub: ''
			},
			{
				src: '../css/img/4.jpg',
				sub: ''
			},
			{
				src: '../css/img/5.jpg',
				sub: ''
			},
			{
				src: '../css/img/6.jpg',
				sub: ''
			},
			{
				src: '../css/img/7.jpg',
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