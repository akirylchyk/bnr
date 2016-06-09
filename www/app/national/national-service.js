(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},

			repressionItems = [
				{name: 'Браніслаў Тарашкевіч', photo: 'css/img/repression/bt.jpg', info: 'Растраляны ў 1948 годзе'},
				{name: 'Вацлаў Ластоўскі', photo: 'css/img/repression/vl.jpg', info: 'Растраляны ў 1942 годзе'},
				{name: 'Максім Гарэцкі', photo: 'css/img/repression/mg.jpg', info: 'Растраляны ў 1933 годзе'}
			],
			comments = {
				1900: [],
				1901: [],
				1902: [],
				1903: [],
				1904: [],
				1905: [],
				1906: [],
				1907: [],
				1908: [],
				1909: [],
				1910: [],
				1911: [],
				1912: [],
				1913: [],
				1914: [],
				1915: [],
				1916: [],
				1917: [],
				1918: [{
					author: 'Ягор',
					text: 'Гэта цудоўная паштоўка. БНР стала фундаментам для развіцця беларускай дзяржаўнасці. На жаль, зараз нават Пагоня пад забаронай.',
					date: '2016-05-29 20:17'
				}],
				1919: [],
				1920: [],
				1921: [],
				1922: [],
				1923: [],
				1924: [],
				1925: []
			},
			index = 18;

		service.setIndex = function (val) {
			index = val;
		};

		service.getIndex = function () {
			return index;
		};
		service.getRepressionItems = function () {
			return repressionItems;
		};

		service.getComments = function (year) {
			return comments[year];
		};

		service.setComments = function (newComments, year) {
			comments[year] = newComments;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.national').factory('national', factory);

})();