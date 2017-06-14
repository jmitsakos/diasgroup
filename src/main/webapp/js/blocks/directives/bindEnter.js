( function () {
	'use strict';

	angular
		.module('dias.blocks.directives')
		.directive('bindEnter', bindEnter);

	bindEnter.$inject = [];
	function bindEnter() {

		return {
			restrict: 'EA',
			link: function (scope, element, attributes) {

				element.bind("keydown keypress", function (event) {
					if (event.which === 13) {
						scope.$apply(function () {
							scope.$eval(attributes.bindEnter);
						});

						event.preventDefault();
					}
				});
			}
		}
	}

}() );
