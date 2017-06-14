( function () {
	'use strict';

	/**
	 * Service to retrieve urls (jsp core or session storage)
	 */
	angular
		.module('dias.services.var')
		.service('UrlService', UrlService);

	function UrlService() {

		return {
			getBaseUrl: getBaseUrl
		};

		function getBaseUrl() {
			return sessionStorage.BASE_URL;
		}

	}
}() );
