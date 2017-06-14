( function () {
	'use strict';

	/**
	 * Service to retrieve urls (jsp core or session storage)
	 */
	angular
		.module('dias.services.rest')
		.service('DiasHttpService', DiasHttpService);

	DiasHttpService.$inject = ['$http', '$q', 'ResponseHandlingService'];
	function DiasHttpService($http, $q, ResponseHandlingService) {

		var service = {
			get: get,
			post: post
		};

		return service;

		function get(url) {
			return request(url, 'GET');
		}

		function post(url, requestObject) {
			return request(url, 'POST', requestObject);
		}

		function request(url, method, requestObject) {

			var deferred = $q.defer();

			var req = {
				url: url,
				method: method
			};

			if (angular.isDefined(requestObject)) {
				req.data = requestObject;
			}

			$http(req).then(function successCallback(response) {
				ResponseHandlingService.handleSuccess(response.data, deferred);
			}, function errorCallback(error) {
				ResponseHandlingService.handleError(error, error.status, deferred);
			});

			return deferred.promise;
		}

	}
}() );
