(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},
			years = [
				{number: 1900},
				{number: 1901},
				{number: 1902},
				{number: 1903},
				{number: 1904},
				{number: 1905},
				{number: 1906},
				{number: 1907},
				{number: 1908},
				{number: 1909},
				{number: 1910},
				{number: 1911},
				{number: 1912},
				{number: 1913},
				{number: 1914},
				{number: 1915},
				{number: 1916},
				{number: 1917},
				{number: 1918},
				{number: 1919},
				{number: 1920},
				{number: 1921},
				{number: 1922},
				{number: 1923},
				{number: 1924},
				{number: 1925}
			];

		service.getYears = function () {
			return years;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.services', []).factory('years', factory);

})();