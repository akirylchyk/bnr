angular.module('app.controllers', [])

	.controller('chronicleCtrl', function ($scope) {


		window.scope = $scope;

		// FAKE CONTENT FOR THE DEMO
		$scope.timeline = [{
			date: new Date(),
			title: "Awesome picture",
			author: "John Mybeweeg",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			type: "picture",
			year: 1900
		}, {
			date: new Date(),
			title: "Look at my video!",
			author: "Miranda Smith",
			text: "Lorem ipsum dolor sit amet",
			type: "video",
			year: 1910

		}, {
			date: new Date(),
			title: "I am here",
			author: "Ludo Anderson",
			text: "Lorem ipsum dolor sit amet",
			type: "location",
			year: 1910
		}, {
			date: new Date(),
			title: "For my friends",
			author: "Sara Orwell",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			type: "text",
			year: 1910
		}];

		$scope.items = [
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

		$scope.selectedItem = $scope.items[2];

	})

	.controller('chatsCtrl', function ($scope) {

	})

	.controller('settingsCtrl', function ($scope) {

	})

	.controller('elementsCtrl', function ($scope) {

	})

	.controller('loginCtrl', function ($scope) {

	})

	.controller('signupCtrl', function ($scope) {

	});