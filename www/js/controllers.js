angular.module('app.controllers', [])

	.controller('homeCtrl', function ($scope) {

	})

	.controller('nationalCtrl', function ($scope) {

		// FAKE CONTENT FOR THE DEMO
		$scope.timeline = [{
			date: new Date(),
			title: "Awesome picture",
			author: "John Mybeweeg",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			type: "picture"
		}, {
			date: new Date(),
			title: "Look at my video!",
			author: "Miranda Smith",
			text: "Lorem ipsum dolor sit amet",
			type: "video"

		}, {
			date: new Date(),
			title: "I am here",
			author: "Ludo Anderson",
			text: "Lorem ipsum dolor sit amet",
			type: "location"

		}, {
			date: new Date(),
			title: "For my friends",
			author: "Sara Orwell",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			type: "text"

		}]

	})

	.controller('sovietCtrl', function ($scope) {

	})

	.controller('loginCtrl', function ($scope) {

	})

	.controller('signupCtrl', function ($scope) {

	})

	.controller('modernCtrl', function ($scope) {

	})

	.controller('IconsCtrl', function ($scope) {

	})

	.controller('addYourOpinionCtrl', function ($scope) {

	})
 