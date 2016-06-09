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
					author: 'Dad',
					text: 'БССР было государством, а не БНР. БНР это проект немецкого правительства для дестабилизации обстановки в регионе',
					date: '2016-06-28 18:17'
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

		service.getPolaroids = function () {
			return polaroids;
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

	angular.module('app.soviet').factory('soviet', factory);

})();