( function () {
	'use strict';

	/**
	 * Service for handling HTTP Responses
	 */
	angular
		.module('dias.services.rest')
		.service('ResponseHandlingService', ResponseHandlingService);

	ResponseHandlingService.$inject = ['ErrorConfig', 'MessageConfig', 'AlertService', 'UtilService', 'LoggerService'];
	function ResponseHandlingService(ErrorConfig, MessageConfig, AlertService, UtilService, LoggerService) {

		var service = {
			handleSuccess: handleSuccess,
			handleError: handleError
		};

		return service;

		function handleSuccess(response, deferred) {
			if (response.fault != undefined || response.fault != null || !response.data)
				handleError(response, 200, deferred);
			else
				deferred.resolve(response.data);
		}

		function handleError(error, errorStatus, deferred) {

			LoggerService.log('Error while invoking Server: ' + error);
			//AlertService.error(error.fault.faultCode, error.fault.faultDescription);
			deferred.reject(error);
		}
	};
}() );