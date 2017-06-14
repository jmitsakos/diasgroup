( function () {
	'use strict';

	var realEstate = {
		/*templateUrl: 'partials/components/store-selector/store-selector.html',*/
		controller: 'RealEstateController',
		controllerAs: 'rsCtrl',
		bindings: {}
	};

	angular
		.module('dias.components.real-estate')
		.component('realEstate', realEstate);

}() );
