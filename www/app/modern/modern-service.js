(function () {
	'use strict';

	var injections = [];

	var factory = function () {

		var service = {},
			timelineItems = [
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
			],
			words = [
				{by: 'Філязофія', ru: 'Философия'},
				{by: 'Незалежнасьць', ru: 'Независимость'},
				{by: 'Сьцяг', ru: 'Флаг'},
				{by: 'Дзяржава', ru: 'Государство'},
				{by: 'Сымбаль', ru: 'Символ'},
				{by: 'Барацьба', ru: 'Борьба'},
				{by: 'Травень', ru: 'Май'}
			],

			cardTypes = [{
				title: 'Удзельнiкi',
				state: 'tabs.chronicleNational',
				image: 'css/img/modern/polaroids/1.jpg'
			}, {
				title: 'Максiм Гарэцкi',
				state: 'tabs.chronicleSoviet',
				image: 'css/img/modern/polaroids/2.jpg'

			}, {
				title: 'Сучаснiкi',
				state: 'tabs.chronicleModern',
				image: 'css/img/modern/polaroids/3.jpg'

			}, {
				title: 'Максiм Гарэцкi',
				state: 'tabs.chronicleSoviet',
				image: 'css/img/modern/polaroids/4.jpg'
			}];

		service.getTimelineItems = function () {
			return timelineItems;
		};

		service.getWords = function () {
			return words;
		};

		service.getCards = function () {
			return cardTypes;
		};

		return service;
	};

	factory.$inject = injections;

	angular.module('app.modern').factory('modern', factory);

})();