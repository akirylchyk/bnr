(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},
			polaroids = [
				{title: 'Расстрелять', src: 'css/img/polaroids/1.jpg'},
				{title: 'Расстрелять', src: 'css/img/polaroids/2.jpg'},
				{title: 'Расстрелять', src: 'css/img/polaroids/3.jpg'},
				{title: 'Расстрелять', src: 'css/img/polaroids/4.jpg'}
			];

		service.getPolaroids = function () {
			return polaroids;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.soviet').factory('soviet', factory);

})();