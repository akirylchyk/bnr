angular.module('app.routes', ['ionicUIRouter'])

	.config(function ($stateProvider, $urlRouterProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

		/*
		 The IonicUIRouter.js UI-Router Modification is being used for this route.
		 To navigate to this route, do NOT use a URL. Instead use one of the following:
		 1) Using the ui-sref HTML attribute:
		 ui-sref='tabsController.chronicle'
		 2) Using $state.go programatically:
		 $state.go('tabsController.chronicle');
		 This allows your app to figure out which Tab to open this page in on the fly.
		 If you're setting a Tabs default page or modifying the .otherwise for your app and
		 must use a URL, use one of the following:
		 /page1/tab1/page2
		 /page1/tab4/page2
		 */

			.state('login', {
				url: '/page5',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})

			.state('signup', {
				url: '/page6',
				templateUrl: 'templates/signup.html',
				controller: 'signupCtrl'
			})

			.state('tabsController.chronicle', {
				url: '/page2',
				views: {
					'tab1': {
						templateUrl: 'templates/chronicle.html',
						controller: 'chronicleCtrl'
					}
				}
			})

			.state('tabsController.chronicleDetails', {
				url: '/page3/:id',
				views: {
					'tab1': {
						templateUrl: 'templates/chats.html',
						controller: 'chatsCtrl'
					}
				}

			})

			.state('tabsController.settings', {
				url: '/page4',
				views: {
					'tab3': {
						templateUrl: 'templates/settings.html',
						controller: 'settingsCtrl'
					}
				}
			})

			.state('tabsController', {
				url: '/page1',
				templateUrl: 'templates/tabsController.html',
				abstract: true
			});

		$urlRouterProvider.otherwise('/page5')

	});