(function () {
	'use strict';

	var injections = [
		'$scope',
		'chronicle',
		'$state',
		'$ionicPopover',
		'national'
	];

	var controller = function ($scope, chronicle, $state, $ionicPopover, national) {

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
			$scope.repression = repressionItems[index]
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


		$scope.goToDetails = function (id) {
			$state.go('tabs.chronicleDetails', {id: id});
		};

		$scope.timeline = chronicle.getTimeline();

		$scope.items = national.getTimelineItems();

		$scope.selectedItem = $scope.items[18];

	};

	controller.$inject = injections;

	angular.module('app.national', []).controller('nationalController', controller);

})();