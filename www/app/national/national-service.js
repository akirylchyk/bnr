(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},

			repressionItems = [
				{name: 'Браніслаў Тарашкевіч', photo: 'css/img/repression/bt.jpg', info: 'Растраляны ў 1948 годзе'},
				{name: 'Вацлаў Ластоўскі', photo: 'css/img/repression/vl.jpg', info: 'Растраляны ў 1942 годзе'},
				{name: 'Максім Гарэцкі', photo: 'css/img/repression/mg.jpg', info: 'Растраляны ў 1933 годзе'}
			];

		service.getRepressionItems = function () {
			return repressionItems;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.national').factory('national', factory);

})();