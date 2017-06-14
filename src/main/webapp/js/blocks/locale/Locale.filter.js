(function () {
	'use strict';

	angular
		.module('dias.blocks.locale')
		.filter('i18n', LocaleFilter);

	LocaleFilter.$inject = ['LocaleService'];
	function LocaleFilter(LocaleService) {
		return function (messageKey, paramJson) {
			if (paramJson) {
				return LocaleService.getLocalizedMessageWithParams(messageKey, paramJson);
			}
			return LocaleService.getLocalizedMessage(messageKey);
		}
	}

}());