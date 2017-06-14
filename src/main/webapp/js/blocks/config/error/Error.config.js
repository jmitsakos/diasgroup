( function () {
	'use strict';

	var configuration = {

		HTTP_STATUS_MESSAGE: {
			401: 'Unauthorized access. You will be redirected to the login page to enter your credentials.',
			403: 'Session timeout. You will be redirected to the login page to enter your credentials.',
			500: 'An unexpected error occurred during sign in. You will be redirected to the login page to enter your credentials.'
		},

		SLG_EXCEPTION_CODE: {
			401: 'Error XXX.',
			402: 'Error YYY.'
		},
	};

	/**
	 * Error Messages Configuration
	 */
	angular
		.module('dias.blocks.configuration')
		.constant('ErrorConfig', configuration);

}() );