(function () {
	'use strict';

	angular
		.module('dias.blocks.locale')
		.service('LocaleService', LocaleService);

	LocaleService.$inject = ['$interpolate'];
	function LocaleService($interpolate) {

		return {
			getLocalizedMessage: getLocalizedMessage,
			getLocalizedMessageWithParams: getLocalizedMessageWithParams
		};

		function getLocalizedMessage(messageKey) {
			return localeTextMap[messageKey];
		}

		function getLocalizedMessageWithParams(messageKey, params) {
			var message = localeTextMap[messageKey];
			params = JSON.parse(params);
			return $interpolate(message)(params);
		}
	}
})();