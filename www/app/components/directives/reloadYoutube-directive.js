'use strict';

angular.module('reloadYoutube', [])

	.directive('reloadYoutube', ['$timeout', function ($timeout) {
		return {
			restrict: 'AE',
			link: function (scope, el, attr) {
				var myIframe = angular.element(document).find('iframe');
				if (myIframe) {
					myIframe.css('display', 'none');
					$timeout(function () {
						myIframe.css('display', 'block');
					});
				}
			}
		};
	}]);