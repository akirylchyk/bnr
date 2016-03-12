angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.national', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/national.html',
        controller: 'nationalCtrl'
      }
    }
  })

  .state('menu.soviet', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/soviet.html',
        controller: 'sovietCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('modern', {
    url: '/page6',
    templateUrl: 'templates/modern.html',
    controller: 'modernCtrl'
  })

  .state('menu.addYourOpinion', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addYourOpinion.html',
        controller: 'addYourOpinionCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')

  

});