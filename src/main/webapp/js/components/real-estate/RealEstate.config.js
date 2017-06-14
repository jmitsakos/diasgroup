(function () {
	'use strict';

	angular
		.module('dias.components.real-estate')
		.factory('RealEstateConfig', RealEstateConfig);

	RealEstateConfig.$inject = ['$filter'];
	function RealEstateConfig($filter) {

		var configuration = {};

		/*configuration.ALL_STORES = {
			id: -1,
			name: $filter('i18n')("store.selector.all-stores")
		};*/

		return configuration;
	}
})();
