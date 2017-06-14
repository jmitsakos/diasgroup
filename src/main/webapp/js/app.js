( function () {
	'use strict';

	angular.module('dias', [

		'ui.router', 'toastr', 'dias.blocks', 'dias.components', 'dias.services', 'dias.grid.custom-grid', 'dias.home'

	])
		.config(configToastr)
		.config(routing)
	;

	/* Common building blocks like configuration, interceptors etc.*/
	angular.module('dias.blocks', ['dias.blocks.configuration', 'dias.blocks.directives', 'dias.blocks.filters', 'dias.blocks.locale']);
	angular.module('dias.blocks.configuration', []);
	angular.module('dias.blocks.directives', []);
	angular.module('dias.blocks.filters', []);
	angular.module('dias.blocks.locale', []);

	angular.module('dias.components', ['dias.components.real-estate', 'dias.components.alert']);
	angular.module('dias.components.real-estate', []);
	angular.module('dias.components.alert', []);
	angular.module('dias.services', ['dias.services.logger', 'dias.services.rest', 'dias.services.var']);
	angular.module('dias.services.logger', []);
	angular.module('dias.services.rest', []);
	angular.module('dias.services.var', []);
	angular.module('dias.grid.custom-grid', []);
	angular.module('dias.home', []);

	/* Configure toastr */
	configToastr.$inject = ['toastrConfig', 'AlertConfig'];
	function configToastr(toastrConfig, AlertConfig) {
		angular.extend(toastrConfig, AlertConfig.CONFIG);
	}

	//routing.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routing($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {

		$locationProvider.hashPrefix('!');

		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

		$urlRouterProvider.otherwise('/home');

		$stateProvider

		// HOME STATES AND NESTED VIEWS ========================================
		var homeState = {
			name: 'home',
			url: '/home',
			templateUrl: 'home.html'
		};

		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		var loanState = {
			name: 'loan',
			url: '/loan',
			templateUrl: 'loan.html'
		};

		//resolve and controller here not in html -- lianos suggestion best practise
		var realState = {
			controller: 'RealEstateController',
			controllerAs: 'rsCtrl',
			name: 'real-estate',
			url: '/real-estate',
			templateUrl: 'real-estate.html',
			resolve: {
				initiateCategories: ['RealEstateService',
					function (RealEstateService) {
						return RealEstateService.get();
					}
				]
			}
		};

		$stateProvider
			.state(homeState)
			.state(loanState)
			.state(realState);
	}

}() );

