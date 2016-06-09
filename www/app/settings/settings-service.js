(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},
			creds = {},
			options = {
				name: false,
				comments: false,
				alerts: false
			};

		service.getCreds = function () {
			return creds;
		};

		service.setCreds = function (name, password) {
			creds = {name: name, password: password};
		};

		service.getOptions = function () {
			return options;
		};

		service.setOptions = function (newOptions) {
			options = newOptions;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.settings').factory('settings', factory);

})();