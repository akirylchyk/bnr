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
				title: 'Браніслаў Тарашкевіч',
				state: 'tabs.chronicleNational',
				image: 'css/img/modern/polaroids/1.jpg'
			}, {
				title: 'Сцяпан Некрашэвіч',
				state: 'tabs.chronicleSoviet',
				image: 'css/img/modern/polaroids/2.jpg'

			}, {
				title: 'Кастусь Езавітаў',
				state: 'tabs.chronicleModern',
				image: 'css/img/modern/polaroids/3.jpg'

			}, {
				title: 'Палута Бадунова',
				state: 'tabs.chronicleSoviet',
				image: 'css/img/modern/polaroids/4.jpg'
			}],
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
					author: 'Nadya',
					text: 'Современная государственность обеспечивает нашу независимость',
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

		service.setIndex = function(val){
			index = val;
		};

		service.getIndex = function(){
			return index;
		};

		service.getTimelineItems = function () {
			return timelineItems;
		};

		service.getWords = function () {
			return words;
		};

		service.getCards = function () {
			return cardTypes;
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

	angular.module('app.modern').factory('modern', factory);

})();