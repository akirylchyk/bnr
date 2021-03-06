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
		 ui-sref='tabs.chronicle'
		 2) Using $state.go programatically:
		 $state.go('tabs.chronicle');
		 This allows your app to figure out which Tab to open this page in on the fly.
		 If you're setting a Tabs default page or modifying the .otherwise for your app and
		 must use a URL, use one of the following:
		 /page1/tab1/page2
		 /page1/tab4/page2
		 */

			.state('intro', {
				url: '/intro',
				templateUrl: 'app/intro/intro.html',
				controller: 'introController'
			})

			.state('login', {
				url: '/login',
				templateUrl: 'app/login/login.html',
				controller: 'loginController'
			})

			.state('signup', {
				url: '/page6',
				templateUrl: 'app/signup/signup.html',
				controller: 'signupController'
			})

			.state('tabs.chronicle', {
				url: '/chronicle',
				views: {
					'tab1': {
						templateUrl: 'app/chronicle/chronicle.html',
						controller: 'chronicleController'
					}
				}
			})

			.state('tabs.chronicleDetails', {
				url: '/page3/:id',
				views: {
					'tab1': {
						templateUrl: 'app/chronicleDetails/chronicleDetails.html',
						controller: 'chronicleDetailsController'
					}
				}
			})

			.state('tabs.chronicleNational', {
				url: '/national',
				views: {
					'tab1': {
						templateUrl: 'app/national/national.html',
						controller: 'nationalController'
					}
				}
			})

			.state('tabs.chronicleSoviet', {
				url: '/soviet',
				views: {
					'tab1': {
						templateUrl: 'app/soviet/soviet.html',
						controller: 'sovietController'
					}
				}
			})

			.state('tabs.chronicleModern', {
				url: '/modern',
				views: {
					'tab1': {
						templateUrl: 'app/modern/modern.html',
						controller: 'modernController'
					}
				}
			})

			.state('tabs.settings', {
				url: '/settings',
				views: {
					'tab2': {
						templateUrl: 'app/settings/settings.html',
						controller: 'settingsController'
					}
				}
			})

			.state('tabs', {
				url: '/tab',
				templateUrl: 'app/templates/tabs.html',
				abstract: true
			});

		$urlRouterProvider.otherwise('/intro')

	});