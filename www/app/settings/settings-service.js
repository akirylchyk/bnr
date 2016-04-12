(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},
			creds = {};

		service.getCreds = function () {
			return creds;
		};

		service.setCreds = function (name, password) {
			creds = {name: name, password: password};
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.settings').factory('settings', factory);

})();