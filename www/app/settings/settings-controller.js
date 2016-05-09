(function () {
	'use strict';

	var injections = [
		'$scope',
		'$state',
		'$ionicModal',
		'settings'
	];

	var controller = function ($scope, $state, $ionicModal, settings) {

		window.scope = $scope;

		$ionicModal.fromTemplateUrl('register.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.openModal = function () {
			$scope.modal.show();
		};

		$scope.closeModal = function (name, password) {
			settings.setCreds(name, password);
			$scope.user = name;
			$scope.modal.hide();
		};

		$scope.$on('$destroy', function () {
			$scope.modal.remove();
		});

	};

	controller.$inject = injections;

	angular.module('app.settings', []).controller('settingsController', controller);

})();